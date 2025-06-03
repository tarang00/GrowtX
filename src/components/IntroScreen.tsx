
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Zap, Code, TrendingUp, Globe } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: <Bot size={64} />,
      title: "AI-Powered Solutions",
      subtitle: "Transforming Businesses with Intelligence"
    },
    {
      icon: <Brain size={64} />,
      title: "Machine Learning",
      subtitle: "Smart Automation for Your Growth"
    },
    {
      icon: <Code size={64} />,
      title: "Web Development",
      subtitle: "Modern, Responsive & Lightning Fast"
    },
    {
      icon: <TrendingUp size={64} />,
      title: "Business Growth",
      subtitle: "Strategic Solutions for Success"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 1500);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            
            {/* Floating Particles */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, -window.innerHeight],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  GrowtX
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Next-Generation Business Solutions
              </p>
            </motion.div>

            {/* Main Content Area */}
            <div className="h-64 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mb-6 text-black">
                    {steps[currentStep].icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300">
                    {steps[currentStep].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-3 mb-8">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-primary' : 'bg-gray-600'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>

            {/* Loading Bar */}
            <div className="w-full max-w-md mx-auto mb-8">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Initializing AI Systems... {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </p>
            </div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={handleSkip}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm underline"
            >
              Skip Intro
            </motion.button>
          </div>

          {/* Futuristic Corner Elements */}
          <div className="absolute top-8 left-8">
            <div className="w-16 h-16 border-l-2 border-t-2 border-primary"></div>
          </div>
          <div className="absolute top-8 right-8">
            <div className="w-16 h-16 border-r-2 border-t-2 border-primary"></div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="w-16 h-16 border-l-2 border-b-2 border-primary"></div>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="w-16 h-16 border-r-2 border-b-2 border-primary"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
