"use client";

import { useEffect, useRef } from "react";

interface ParticleCanvasProps {
	className?: string;
}

export function ParticleCanvas({ className = "" }: ParticleCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const particleCount = 80;
		const connectionDistance = 150;
		const mouse = { x: null as number | null, y: null as number | null };

		const particles: {
			x: number;
			y: number;
			vx: number;
			vy: number;
			radius: number;
		}[] = [];

		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				radius: Math.random() * 2 + 1,
			});
		}

		const updateParticles = () => {
			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
				if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

				if (mouse.x !== null && mouse.y !== null) {
					const dx = mouse.x - p.x;
					const dy = mouse.y - p.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						const force = (100 - distance) / 100;
						p.vx += (dx / distance) * force * 0.02;
						p.vy += (dy / distance) * force * 0.02;
					}
				}
			}
		};

		const drawParticles = () => {
			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
				ctx.fill();
			}
		};

		const drawConnections = () => {
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const p1 = particles[i];
					const p2 = particles[j];
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < connectionDistance) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(59, 130, 246, ${
							1 - distance / connectionDistance
						})`;
						ctx.lineWidth = 0.5;
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				}
			}
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			updateParticles();
			drawParticles();
			drawConnections();
			requestAnimationFrame(animate);
		};

		const handleMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};

		const handleMouseLeave = () => {
			mouse.x = null;
			mouse.y = null;
		};

		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />;
}
