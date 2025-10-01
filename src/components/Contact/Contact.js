import React, { useState, useEffect } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
import { trackSectionView, trackContactAction } from "../../utils/posthog";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    trackSectionView('Contact');
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("rohankommathoti22@gmail.com");
    setShowTooltip(true);
    trackContactAction('email_copy', {
      email: 'rohankommathoti22@gmail.com'
    });
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>rohankommathoti22@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:rohankommathoti22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactAction('email_send_click', {
                  email: 'rohankommathoti22@gmail.com'
                })}
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
