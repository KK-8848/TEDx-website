import React from 'react';
import InstagramIcon from '/public/assets/Instagram.svg';
import MailIcon from '/public/assets/Mail.svg';
import WhatsappIcon from '/public/assets/Whatsapp.svg';
import YoutubeIcon from '/public/assets/Youtube.svg';

const IconButton = ({ href, icon, alt }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img src={icon} alt={alt} className="w-[61px] h-[62px]" />
  </a>
);

const SocialIcons = () => (
  <div className="flex gap-4 items-center">
    <IconButton 
      href="https://instagram.com/tedxcet" 
      icon={InstagramIcon} 
      alt="Instagram" 
    />
    <IconButton 
      href="mailto:tedxcet@gmail.com" 
      icon={MailIcon} 
      alt="Email" 
    />
    <IconButton 
      href="https://wa.me/+919876543210" 
      icon={WhatsappIcon} 
      alt="WhatsApp" 
    />
    <IconButton 
      href="https://youtube.com/@tedxcet" 
      icon={YoutubeIcon} 
      alt="YouTube" 
    />
  </div>
);

export default SocialIcons;
