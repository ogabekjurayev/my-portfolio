import React from "react";
import Group from "./imgs/Group 1000015845.png";

export default function AboutMe() {
  return (
    <div className="container5">
      <div className="section-4-all">
        <div className="section-4-left">
          <img src={Group} alt="/" />
        </div>
        <div className="section-4-right">
          <h2 className="section-4-right-h2">
            About <span className="section-4-right-span">Me</span>
          </h2>
          <p className="section-4-right-p1">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="section-4-right-p2">
            I began my journey as a web developer in 2023, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 1 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="section-4-right-p3">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
