import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Wrench, Sparkles, Package, Shield, Clock, Star, CheckCircle, ChevronDown, MessageCircle } from 'lucide-react';
import Header from './Components/Layout/Header';
import Hero from './Components/Layout/Hero';
import Service from './Components/Layout/Service';
import Working from './Components/Layout/Working';
import Reviews from './Components/Layout/Reviews';
import ContactForm from './Components/Layout/ContactForm';
import Footer from './Components/Layout/Footer';

export default function ChimneyGeyserService() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Service />
      

      {/* Process Section */}
      <Working />
      

      {/* Testimonials */}
      <Reviews />
      

      {/* Contact Form */}
      <ContactForm />
      

      {/* Footer */}
      <Footer />
      

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+919565652635"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}