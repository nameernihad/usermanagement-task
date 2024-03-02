import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="flex w-screen justify-center bg-slate-100 h-screen w-screen overflow-x-hidden items-center">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3, delay: 0.3 }} className="flex flex-col md:flex-row gap-5 md:gap-10 bg-slate-200 shadow-2xl rounded-lg p-5 max-w-7xl">

        <div className="w-full md:w-1/2">
          <motion.img
            src="src\assets\Group portrait of happy young.jpeg"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
             // Apply scale-up effect on hover
          >
            <div className="mb-5">
              <h1 className="text-black text-4xl font-bold">About Us</h1>
            </div>
            <div className="h-auto overflow-hidden">
              <div className="h-full overflow-y-auto">
                <p className="text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat beatae, autem reprehenderit, molestiae minima velit
                  animi, doloremque impedit alias atque pariatur! Molestiae
                  veritatis accusamus dignissimos vero quaerat voluptatem nostrum
                  deleniti non perferendis debitis itaque autem soluta unde
                  tempora eaque magnam maxime, asperiores nulla, consectetur
                  commodi amet ullam eum minus dolores. Nesciunt laboriosam
                  commodi ea omnis explicabo ullam modi quas culpa. Laborum sed
                  perferendis necessitatibus non. Numquam praesentium ab, enim
                  veritatis facilis tempore obcaecati laborum ad! Totam molestias
                  sit quidem maiores autem quibusdam numquam nihil eos? Eveniet
                  cupiditate ea vitae voluptatum odit mollitia ipsum similique
                  nihil dicta! Eum dignissimos sit rem?
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;
