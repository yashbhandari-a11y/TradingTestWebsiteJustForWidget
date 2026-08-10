"use client"
        
        
        import { useEffect } from 'react';

        export const PlanifyWidget = () => {
          useEffect(() => {
            const widgetId = '79d6ded6-7210-4685-a9af-fdd9521bfc79';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div
              style={{
              position: 'relative',
              top: '0',
              zIndex: '20',
              height: '445px',
              width: '330px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="400px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
      
        export const WidgetFullSizeComponent = () => {
          useEffect(() => {
            const widgetId = '5376de45-b7ca-45c5-bbd7-6dc2d48ca291';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="614px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
   

  export const PlanifyWidgetTest = () => {
          useEffect(() => {
            const widgetId = '5bb2dedc-7f63-471e-8ba3-720dce6ecd62';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget')as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div
              style={{
              position: 'relative',
              top: '0',
              zIndex: '20',
              height: '445px',
              width: '330px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="400px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
        export default PlanifyWidget;
        
        


