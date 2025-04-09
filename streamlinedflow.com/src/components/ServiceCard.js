"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ServiceCardGrid({ cards }) {
  const searchParams = useSearchParams();
  const [activeCard, setActiveCard] = useState(0);

  // Set initial active card based on URL parameter
  useEffect(() => {
    const service = searchParams.get('service');
    if (service === 'autonomous-agent') setActiveCard(0);
    else if (service === 'chatbot') setActiveCard(1);
  }, [searchParams]);

  return (
    <>
      {/* Service Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-4xl">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              card={card}
              index={index}
              isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </div>
      </div>

      {/* Selected Service Details */}
      <ServiceDetails card={cards[activeCard]} />
    </>
  );
}

function ServiceCard({ card, index, isActive, onClick }) {
  return (
    <div
      className={`card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] ${
        isActive ? 'ring-2 ring-[var(--color-accent-2)]' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 rounded-lg flex items-center justify-center">
          <div style={{ color: 'var(--color-accent-2)' }}>
            {card.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold">{card.title}</h3>
      </div>
      <p className="text-gray-300">{card.description}</p>
    </div>
  );
}

export function ServiceDetails({ card }) {
  return (
    <div className="card p-8 bg-opacity-50 backdrop-blur-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-lg flex items-center justify-center">
          <div style={{ color: 'var(--color-accent-2)' }}>
            {card.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold">{card.title}</h3>
      </div>
      <p className="text-gray-300 text-lg mb-8">{card.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
          <ul className="space-y-3">
            {card.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="p-1 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
          <ul className="space-y-3">
            {card.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="p-1 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span style={{ color: 'var(--color-text-primary)' }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 