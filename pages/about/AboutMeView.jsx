import { oswald } from "@/utils/fonts";


const AboutMeView = () => {
  return (
    
    <div className="max-w-[1534px] h-screen flex flex-col justify-center items-center   mx-auto  bg-slate-900 pt-20  ">
      <h3 className="block mb-8 text-white font-bold text-2xl capitalize tracking-widest  "> a small view about me </h3>
      <p
      style={{
        fontFamily:oswald.style.fontFamily
      }}
      className="w-[50%] block mx-auto text-white indent-4 line-clamp-4 tracking-wider text-lg font-extralight ">
        Hello there! I'm [Your Name], a passionate and creative web developer
        with a strong focus on crafting immersive and user-friendly digital
        experiences.<br/> <br/>
         With a deep love for code and design, I specialize in
        harnessing the power of technologies like React.js, Next.js, and
        Tailwind CSS to bring ideas to life on the web.<br/><br/>
         My journey in the world
        of web development began with a curiosity to understand how things work
        behind the scenes on the internet. Over the years, this curiosity
        transformed into a genuine passion, driving me to explore the
        ever-evolving landscape of web technologies. Whether it's building
        dynamic and responsive user interfaces or architecting the backbone of a
        web application, I thrive on the challenges that each project brings.
        One of the aspects I truly cherish about this field is its collaborative
        nature .<br/><br/>
        I love working alongside designers, other developers, and
        stakeholders to turn concepts into tangible digital solutions. By
        blending my proficiency in React.js and Next.js, I aim to create
        seamless and performant user experiences that leave a lasting impact.
        And with Tailwind CSS as my toolkit of choice, I meticulously craft
        interfaces that are not only aesthetically pleasing but also highly
        functional and maintainable. But it's not just about writing lines of
        code for me. I believe in the art of storytelling through web
        development. Every website or application I work on has a unique
        narrative to tell, and I take pride in weaving that narrative into the
        very fabric of the digital product.<br/><br/>
         From the initial concept to the
        final deployment, I'm dedicated to delivering excellence at every stage.
        When I'm not typing away at my keyboard, you might find me exploring new
        design trends, experimenting with creative coding techniques, or
        enjoying a cup of coffee while brainstorming my next big project. I
        thrive on staying up-to-date with the latest industry trends and
        continually honing my skills to ensure that the solutions I provide are
        both innovative and practical.<br/>
        Thank you for stopping by and taking the
        time to learn a bit about me. If you're as excited about web development
        and cutting-edge technologies as I am, I'd love to connect and
        collaborate on future projects. Feel free to reach out via the contact
        information provided and let's embark on a journey to shape the digital
        world together!<br/> Best regards,<br/><br/>
        Boussafer Abdelhak
      </p>
    </div> 

    
    
  );
};

export default AboutMeView;
