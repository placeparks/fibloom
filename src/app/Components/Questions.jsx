"use client"
import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    const borderStyle = isLast ? '' : 'border-b border-b-1 border-[#535959]';
  
    return (
      <div className='flex flex-col items-center justify-center'>
        <h2 className={`mb-0 w-[804.01px] ${borderStyle}`}>
  
          <button
                    className={`flex items-center justify-center w-full p-5 text-center text-[35px] text-white textOde z-10`}
            onClick={toggleAccordion}
          >
            {question}
        
          </button>
        </h2>
        <div
          className={`p-5 w-3/5 text-center text-[20px] poppins-regular text-white  ${isOpen ? 'block' : 'hidden'}`}
        >
          {answer}
        </div>
      </div>
    );
  };
  

const Questions = () => {
  return (
    <div className='bgsection5 relative'>
    <div className='blob6'></div>
   <div className='blob7'></div>
    <div className="relative my-24 mx-auto px-6 z-10">
<section className="mb-32 flex flex-col items-center justify-center text-white">
 <h2 className="mb-6 text-[70px] textOde">FREQUENTLY ASKED QUESTIONS</h2>
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
            question="Who should I contact in case of any query?"
            answer="dev@mirac.live"
                  />
                            
                                   <AccordionItem
            question="On which blockchain NFTs will be minted?"
            answer="ZkSync"
                      />
                                      <AccordionItem
            question="How can I participate in the Moody NFT raffle?"
            answer="NFT holders will automatically be eligible for the raffle. Specific details will be provided to NFT holders."
            isLast={true}  
                      />
         
        </div>
      </section>
    </div>
   </div>
  );
};

export default Questions;