"use client"
import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
  
    return (
      <>
       <h2 className="mb-0 ">
        <button
          className="flex items-center justify-between w-full p-5 text-left text-white text-2xl md:text-[35px] textOde bg-transparent"
          onClick={toggleAccordion}
        >
          {question}
          <svg
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </h2>
      <div
        className={`p-5 text-white text-base poppins-regular ${isOpen ? 'block' : 'hidden'}`}
      >
        {answer}
      </div>

      </>
    );
  };
  

const Questions = () => {
  return (
    <div className='bgsection5 mt-[-200%] md:mt-0 relative md:p-12'>
    <div className='blob6 hidden md:block'></div>
   <div className='blob7 hidden md:block'></div>
    <div className="relative my-24 mx-auto px-6 z-10">
    <section className="mb-32 text-white">
        <h2 className="mb-6 text-3xl md:text-[70px] ml-4 md:ml-4 textOde">FREQUENTLY ASKED QUESTIONS</h2>
        <div>
          <AccordionItem
            question="What is the Fibonacci Bloom?"
            answer="Fibonacci Bloom is a unique NFT collection inspired by the intertwining of art and the Fibonacci sequence, represented through the digital art character, Cipher Sun."
                  />
                       <AccordionItem
            question=" Who is Cipher Sun?"
            answer="Cipher Sun is the artistic persona at the heart of the Fibonacci Bloom collection, embodying the fusion of natural patterns and digital existence."
                  />
                       <AccordionItem
            question="What does owning a Fibonacci Bloom NFT entail?"
            answer="Ownership includes the digital art piece and eligibility for the Moody NFT #1466 raffle."
                  />
                         <AccordionItem
            question="Is a Fibonacci Bloom NFT a financial investment?"
            answer="No, the Fibonacci Bloom NFTs are for artistic and entertainment purposes and should not be considered an investment vehicle."
                  />
                                   <AccordionItem
            question="How can I participate in the Moody NFT raffle?"
            answer="NFT holders will automatically be eligible for the raffle. Specific details will be provided to NFT holders."
                  />
                                   <AccordionItem
            question="Who holds the rights to the Fibonacci Bloom collection?"
            answer="All rights are reserved by mirac.eth, the creator and curator of the collection."
                  />
                                   <AccordionItem
            question="On which blockchain NFTs will be minted?"
            answer="ZkSync"
                  />
                                   <AccordionItem
            question="Who should I contact in case of any query?"
            answer="dev@mirac.live"
                  />
        </div>
      </section>

    </div>
   </div>
  );
};

export default Questions;