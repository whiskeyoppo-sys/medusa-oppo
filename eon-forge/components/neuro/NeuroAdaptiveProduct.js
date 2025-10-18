// 🎨 AI-ADAPTIVE PRODUCT COMPONENT
import { useEffect, useState } from 'react';

export default function NeuroAdaptiveProduct({ product, customerData }) {
  const [adaptation, setAdaptation] = useState(null);

  useEffect(() => {
    if (customerData && global.neuroBrain) {
      const soulprint = global.neuroBrain.analyzeCustomerBehavior(customerData);
      const adaptation = global.neuroBrain.generateAdaptiveInterface(soulprint);
      setAdaptation(adaptation);
    }
  }, [customerData]);

  if (!adaptation) return <DefaultProductView product={product} />;

  return (
    <div className={`neuro-product ${adaptation.colors.theme}`}>
      <div className="neuro-product-image" style={adaptation.layout.image}>
        <img src={product.images[0]} alt={product.title} />
        <div className="emotional-overlay" style={adaptation.colors.overlay} />
      </div>
      
      <div className="neuro-product-content">
        <h3 className="destiny-headline" style={adaptation.copy.headline}>
          {adaptation.copy.headlineText}
        </h3>
        
        <p className="soulful-description" style={adaptation.copy.description}>
          {adaptation.copy.descriptionText}
        </p>

        <NeuroPurchaseButton 
          product={product} 
          adaptation={adaptation}
          customerData={customerData}
        />
      </div>
    </div>
  );
}

const NeuroPurchaseButton = ({ product, adaptation, customerData }) => {
  const [buttonState, setButtonState] = useState({
    text: adaptation.copy.cta,
    glow: adaptation.colors.glow,
    magnetic: true
  });

  return (
    <button 
      className={`neuro-purchase-btn ${buttonState.glow} ${buttonState.magnetic ? 'magnetic' : ''}`}
      onClick={() => handleNeuroPurchase(product, customerData)}
    >
      {buttonState.text}
    </button>
  );
};
