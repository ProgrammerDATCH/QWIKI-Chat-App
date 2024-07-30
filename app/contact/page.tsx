"use client"
import React from 'react';
import Head from 'next/head';
import { FaGlobe, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaWhatsapp, FaFacebook, FaEnvelope, FaTiktok, FaGooglePlay, FaTelegram, FaSnapchatGhost, FaPhone } from 'react-icons/fa';

const myLinks = {
  web: "https://programmerdatch.netlify.app/",
  ig: "https://www.instagram.com/programmerdatch/",
  linkedin: "https://www.linkedin.com/in/programmerdatch/",
  github: "https://github.com/ProgrammerDATCH",
  youtube: "https://www.youtube.com/@ProgrammerDATCH",
  twitter: "https://twitter.com/ProgrammerDATCH",
  whatsapp: "https://wa.me/+250735177666",
  whatsappJob: "https://wa.me/+250735177666?text=Greetings%20Programmer%20DATCH%2C%0A%0AI%20discovered%20your%20Qwiki-Chat-App%20and%20I%27m%20interested%20in%20offering%20you%20a%20coding%20opportunity%20for%20my%20project.",
  facebook: "https://www.facebook.com/profile.php?id=100068532707087",
  email: "mailto:programmerdatch@gmail.com",
  tiktok: "https://tiktok.com/@programmerdatch",
  play: "https://play.google.com/store/apps/dev?id=7881383766588193746",
  telegram: "https://t.me/programmerdatch",
  snap: "https://www.snapchat.com/add/datch1502?share_id=NZq-VlCB6p4&locale=en-US",
  call: "tel:+250735177666"
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-gray-300 mb-8 text-center">
          Have questions or suggestions? We&apos;d love to hear from you. Connect with us through the following links:
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-5 gap-10 md:gap-20">
            <a href={myLinks.web} className="block text-indigo-400 hover:text-indigo-500"><FaGlobe size={24} /></a>
            <a href={myLinks.ig} className="block text-indigo-400 hover:text-indigo-500"><FaInstagram size={24} /></a>
            <a href={myLinks.linkedin} className="block text-indigo-400 hover:text-indigo-500"><FaLinkedin size={24} /></a>
            <a href={myLinks.github} className="block text-indigo-400 hover:text-indigo-500"><FaGithub size={24} /></a>
            <a href={myLinks.youtube} className="block text-indigo-400 hover:text-indigo-500"><FaYoutube size={24} /></a>
            <a href={myLinks.twitter} className="block text-indigo-400 hover:text-indigo-500"><FaTwitter size={24} /></a>
            <a href={myLinks.whatsapp} className="block text-indigo-400 hover:text-indigo-500"><FaWhatsapp size={24} /></a>
            <a href={myLinks.whatsappJob} className="block text-indigo-400 hover:text-indigo-500"><FaWhatsapp size={24} /></a>
            <a href={myLinks.facebook} className="block text-indigo-400 hover:text-indigo-500"><FaFacebook size={24} /></a>
            <a href={myLinks.email} className="block text-indigo-400 hover:text-indigo-500"><FaEnvelope size={24} /></a>
            <a href={myLinks.tiktok} className="block text-indigo-400 hover:text-indigo-500"><FaTiktok size={24} /></a>
            <a href={myLinks.play} className="block text-indigo-400 hover:text-indigo-500"><FaGooglePlay size={24} /></a>
            <a href={myLinks.telegram} className="block text-indigo-400 hover:text-indigo-500"><FaTelegram size={24} /></a>
            <a href={myLinks.snap} className="block text-indigo-400 hover:text-indigo-500"><FaSnapchatGhost size={24} /></a>
            <a href={myLinks.call} className="block text-indigo-400 hover:text-indigo-500"><FaPhone size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
