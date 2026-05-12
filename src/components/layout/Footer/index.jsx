import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] pt-24 pb-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-16">
          
          {/* Left Column (Logo / Copyright / Badges) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="inline-block mb-2">
              <span className="font-syne text-[36px] font-extrabold tracking-tight text-white hover:text-gray-200 transition-colors" style={{ letterSpacing: '-0.05em' }}>
                {'{Auth Ai}'}
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] font-nunito text-base">
              © {new Date().getFullYear()} Auth AI Communications Private Limited
            </p>
            
            <p className="text-[var(--text-secondary)] font-nunito text-base flex items-center gap-2">
              Made with <span className="text-pink-500 text-xl">❤️</span> in India
            </p>
            
            {/* Meta Business Partner Logo & Text */}
            <div className="flex flex-col mt-4 mb-6">
              <div className="flex items-center gap-2">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABKVBMVEX///8JJzAAf/0AZub29/kAJC0ABRgAHynKzs8cMzv8/P0AAAAACRkAf//z9PcAevjCxslUYGcAc/IAFyLn6u8AAA4AHSjw8fFjbXLm6e6NlJcABRvu8PS9wcQAff/X3OTEy9izt7rR1+Cjr8K1vs5sdXgAbOwAY+YAEB4Adf4AABHK0dzk5ucAAAguQEe9xdOdo6UAWuaRn7Vugp7V19l9hYmHlqucqb2IrOhBT1ZXiOUAYOh5iaCtt8mQl5qkqaxHkfdcgblHgNEAbvYbf/S/zOXN1+lFfuSJsPK5x+hVl/d5qPNcluyiuOeVqtRxmOa9z+45dd5tiLFahcZ/krE2guZLdb1skcsjbuWHnsN9ntSTpMJmjNV1g5J8mMRJetGqvuYyifils8tRft9/AAAPUUlEQVR4nO2ceVfiSBfGwWaTzSUsYgsBZCeAIqIIaIu0Ts/08qptby6t8/0/xFuVVFUqlUrAPsw5zvR9/oRKoH7ce+upJXg8IBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAT6DRUO+6jC4dmNws6N/uvCEOLxLUPxOIbh3iiOG/2WuHQI6bSmnr89VzVNyyS27CgQKr0RalM02/xuvDCFdPr88GK4i/Xq6LCpZjIiLh3V+R9v6li5N4f5nr3Nf184rNLvLnaH1VeGqsPdo797KkbBAkcHev5nPRdb0pXL1f98R9o43zqdZdLm+CY9s/kiOvYPCFNQL3YpKcJr96hTzCQYLQQ0nf6rnlvilKu/z/NtJApFokSNwRxfpRYgrQPBRfVuscKsPgiodFzVj00WOHpYTS2odFwxvY1zKoYCXqrG6syvclyjjf3Lv9qdbMFQ71dv4CaM4dOuDRXW7t1q0aCFG/2vHhNZLS3F6j9wG8fY4mDN7r8v+YzGTho0aliRzV+9gYswhqOhlNWrV8OLTlOnhWuajBUOrk9utDhY3ujJjO+yrywA1lpQv4HyD8ByZYVS8RLRSiBHhVjRWCKy0ZLen4flr7l/Fy3ifdGw9Bx0ZmXQUhNbKAcpq6XJ6d7e1fVNjuHK/UBDgcOYyMOa1QHSzZcLC9d2S1EfDodVvthXL7KohJ8TNLHY5H7U73eRPt+wcp+77agJOS0LLG8r7fJdQi3vi4aFAuucY1X99uVqNLo6veRxDSelTn5KWC1djfrd7XGpVBpvH3ylwRVbGucxLcknWGGlyi5fpu1/0bBwEn4zuVS/oKjpdg9Q1FxyqTn8WnhjBFFsujfqbpfyzaJabOZL4+80tnJHpaa8bFlheSPOA3rB0vIlwkofMirVVyxqUNh85WhVjwirJcRq3CmqmUQikckU8yWT1veSvGwJsILOzjTlf9GwUGAVuSQkUaOqajHfGX/nMrFKsu0Kscpjn4omhPGthNrs/CC0YlP0hiy0BFjOztT0oy8UFnINDEkVkdhmUaPmS7ccrYoePac6K2N2g2eKW5lm9j2hlfuKElESWgxW0B0C9aN+/8uEhbr7lgXWEJPo6LMbGjW3XCauIxwTxsq4PIxplZij2EYjojOs4AYxnA7OlPhR//Ka3xWWlt3Z3y/vHzvPZiisY9fO+0Inm/p95pnee6yBVb0c9bc7lqgpdh64HF2JTe9pC3o9oqU2f7DQGuPQEj+EwoqGBoSC1JlSPxrIbgSdYWn7wWRUUVKplFJrJDesGb25YWiZfM5gw5QIrjCIBGrkPsq+watsNF2T/goW21DdwyQyZtT4MK07LrZyV6MDoYgjWgl19Ym4iqk0tBis1R6xUdL8WEtRRGuOsHqDlsIPAqnGMo9rrZbSRZv4U0w1q2M5qUV5+6tEyvg3bit625a0qKLA+sQC68uoa605mFYze2mWtEsUWGINR7wzxY80tB5KktAyYTGDLnGm1I8mQ86wyhGuh6SfrQ0Olu1tEysPS2tH/cL7SiDEbF5UCssX18zAGfXF0UynNebc1ml/bCvhqJEaoob1CIWWbUDkYNFUkzhT8kWDax4nWJpX8UqkLDPyc8JatTNHnxYpuMJCHuuRwqr+xCmWiFuiBudY54FLxL6kKOHQOqSh1RXvYYXFFhUiYlGlfhS/IYfVa4jRQBRUKK35YBUi8iaR1YEbLL6876HAEh04Dq3e+4pptn5KIgeHVofMsWOyEs/DCjdIB0VnSuqMsu9xgKUlTVb+FCrxJpggbTgXrJCVld+8bWrZ/KI2oZgYVioGi0t7YBktHutLXCLKXDpq1KOToRsJTR6WZ4cYT8GZ0peTPgdY4SDrlNJq729u7g9aNfqSQurWIGksSNPXU1EmVtrS3Fw9FW3VlpdrrWjKwk8GC4XEI4aFVT1Ftds2tUMtNGSfVszQ+qZbB7FVQqV5GJPkoQWWxy8zUdSP1vQBXgZrg/Yn2DimWVdgRYyMX73VkC6STqlyiGmV2oEBi75Ucj+kJ4EvVG7xuKSw0Fj4isCqjGTVBrX4C1NYN0PrWjJdRslK8zD3gPPQDVaWJKLFmVI/mvI4wFqlq83KgB9Iy+TWfq/lE11MqTlXT5a5chEvm8vZDrC06bquSgVloawapd8aEMxErB50iuJKTBjlIR0P73Rz4QKL/rS8M2V+tOAEi9hMr7Jm7cN+1HKlAEti51g2RwrWN7iyL4Pl2yqerRNdS8Y5ZKE0wmDFNFsX9ukyzsNPtGgd2HypAEviTKkfbVv6ysHK0ghqi52gbduSFyWwClEaVwXxLbPwS2DhkkVh1fe6uHILgRVP/0HXXy7NRHyw13hU2g7pcpc9nQVYrPwwZ0r9aCvkBIsWGpvj8KRJF1v8O86w6I30UVfQDgUpg4VYVGhkjewBgZLwnDqCn/fm+oOkxqM8fEuLVt9WtERYadGZcn5UDoumqayLZQO9pT45wqI3ks9O6TqtFJb2nsK66NtKDV5CfaJrxnv3X8xEvLPVeASrSLleoVHVHZboTHk/Kod1UnMKLHZ3i3FzhEVvpOzIYIWibrCmNLAm9nhAgcf8wJfRqP+Nq/ElocajosUq/FfdabnCCtM1G6ODvB+VwyLLEPI1VjKMReaBRcLQG5HvmiQdYaFCY9b37lgoWSiwVBos0/vP3QNz1iOp8b6ERm3p3cFMWJ4T8hMmLTaVXWSDRVYaatJ4IGWowa2rOMIig6rTyrYbLJXBusJl2TqHjqff0MA6HR2MS6WfVa7GC/NpBJ6sl8YmByVU/dxh0S+NcTA/apIQYcXJABCQrjPtG9ES5c7cOMKitc9hCdUN1vnZiqH6ZzEcUHX/QAPr6b477jTzY7PGV8Qaj2D9Rb2DyF0Ga9V0ptSP+m19ZbB6pLVXeS1R0AbbEZZGfxibb5gJK/GOwRoJsPAqFdsRvOrjhXm1ae72VCdCjQ+b3uHG5h0ksJgzTWkkahr2wGCwxB0PqXgyTrAo9WjombBQUX6sE1gr4mCIkpBuQ8R+4plQJpFRV80aP7y1mi00WHwgsJ76YvmTwerRMZwMjEHeVIqwVqkBclNq33YDOyzyTeT57AYrbsJa0mfRXKD40o/sYMOeviiIV+RvzQX5S2uNR96Bg9WcDYuNS0SWnVcRVnYuWGXbDRYK6wOFNbXCsiThxFi78eEFUW7X7KslEZ8Pi18pQT3l1oZ/NbLmgUXSMPDsNGSRhbxBn3eSYT4Jl0bdsY7FF08US6xqVciEOvyrsDyb/Bqx1ffYCjytWbWAsyJzwNJozXI4reoOi6TakgCLS8LT/oEx8umbPazGVyqWRORg3cwJy1MzlyiFaYwIi/axdhJy0Rw+y0fn8FLD5g7rHTumoBd42nFkR1kS3tx36R6Fvun1jcE64xMRwTp8LqwTM7kC1hm8zZSSPjqN+DY5+izif61Zb8oN1jmLnytzNOTtqG4baADpm15/7xJWSFwiotGQ+qyJbf3CARZbo7LtUNtg0Zm2Qx9tcoRFF+kdzh+6+aweg3XNfBZm9Qd7fcLvquKdieakSmGtX5o7+ciU0o3W67l8lv56pGbIuswpgUVn3sk5n01whHVMbiSv8OmGCyyNrSowJ2kcs6WspiN+ywfXeLXDWK2fseUHjJH6/dNuSZ3p4A2d7BgSB3IbLHoHp1pjg2X4EvvuJB0Og2uyy8jEyWEi/Z4Vrc8GFP2oOyv7KAkP+HmNvun6cWgkIZpRnj3otPBIqbEVCnEy4ALLsa+2xT86GLyWnSy0i5g4v32+TG/UkoQWNcoOsD6w2nRzUsLH3eNb6XN2qlb37tYN/bhutggrROt7x7gqoeZWSDDaV8YWAIv6jJQ0InqiE6DNI7a0pe/4vba3fOyIhHQ9K9M0g+iogPqdyWiPJiuUhMLRBr3GdyoM1nrloYMfh9LUpxVa5WavlM6UHVac/ug1yVppNikuChbIqGcfPukqrTclRl16me2RSWElemzYW8pNf4zz+cc3DB9LQtvph4/DCluOPjv6WGq+PVwxh0/7Yv4CYHk26aHAqDgi+sotrz9oTU9amvilDCI2zUq1t/jXswFzN1u+YaE+cmxyuXo9Zz6ZE7vWk1DcyEE1vnnH1sHwXgfS+ooZjTN3d2ZLtsnqZbvPfj5c0puNlCROXpPGwba4EB1n+4PB1iabN6wOGl5T0q2weKb3JH++hNhRPIEWtxJRIq5eVExYZCqOZ0aYsLGxbblmIbBY9fX6o8p+oadpWi+7OYiQGiQcv2Lx428NjguFwsnmGs3fExMLPgewc4LeC/CHtZw2WRN8aFlZTUfCIT9GC816SlMJLOOqmdv3vwiL3wT1p2qBRqMRiCpmHyMWV2Gi9QYVbOUUk+YGNyn1p9C77C5Bl4Mher8/2R6JM3qNjwFKT2obh7asqBisK/tpt0XB8uw4nBQyIqtt3YJYSwkNOM/Vlh7zmn3kCM323khoYVbYussOauvWNP+3lRXxDdd9w/Bbr1gQLBRbDge0vP6IOEj6xKN9vEEd1GQ3QbHpfpgNOwE7LYMVfnBONr0waG1PKyIs/Syz5CmLRcHy9JalvfRHvXaL2WtZaVncfLllwx7EZx9cj0kap0Y/5SxVPobMKGElf8oLM1bzpckZB2tlKZe7pue+hfYLg4Xmdo2a2M1gICg9Ka4tW4LLOvXJKtb7+AP6sDkDFj6Z3bm9ydFnB2Ox2BN+dMCFFaP1/bLOcOVyN3t9yxl5U6FIUldk3gfEB8YFLUXy0TvLyRq12qg8B1objnfdURqKcWjGH1Ragj/bSTVIYUdvJtuGHfEaHxyR/6o4pTLNzvj27gaFBiI1nVyhsBp3iq5P1OuZ2CyNv08ukc/K1Vcu0GXdg1JelQ4JaaJ5/8+AtpdvG2sn5XajhdRobxw7rA8ThTbXlpORyOv2xmbWdjP0Zi3SakX8a2wmP+OLGs8G5Evjg27/8+dRv9/vHoxLzVn/PqBDRpdt85fhRzhdr1qkFvQ5z7uNTgs/1lQab2ONS3i25/rXA86XuRP+D8h48ETFTw9iNfFzTnN0Gv9pxlYmQy5rznvZv156vxMZ1HNVzaAub80KK/ll8fku+9fL+OOiOPvbojn7bP7f0bMu+/crjOQL4//Del7Jw5fpV/02pEAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAoAXo/9yGPMmflB09AAAAAElFTkSuQmCC" 
                  alt="Meta Logo" 
                  className="h-[32px] object-contain"
                />
                <span className="text-white font-bold text-2xl tracking-tight leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Meta</span>
              </div>
              <span className="text-[var(--text-secondary)] font-medium text-[16px] tracking-wide mt-1 ml-1">Business Partner</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-5 mt-2 items-center">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              {/* Twitter Bird */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              {/* YouTube */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors"><path d="M2.5 7.1C2.5 7.1 2 10.4 2 12c0 1.6.5 4.9.5 4.9C3.1 18.5 4.8 19 12 19c7.2 0 8.9-.5 9.5-2.1.5 0 .5-3.3.5-4.9 0-1.6-.5-4.9-.5-4.9C20.9 5.5 19.2 5 12 5 4.8 5 3.1 5.5 2.5 7.1z"/><polygon points="9.5 8.2 15.5 12 9.5 15.8 9.5 8.2"/></svg>
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              {/* Play Store */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors ml-1"><path d="M3.6 2c-.3.2-.6.7-.6 1.4v17.2c0 .7.3 1.2.6 1.4l.1.1 9.7-9.7v-.2L3.7 1.9l-.1.1zm10.5 9.4l3.3 3.3-11.4 6.6c-1.1.6-1.9.1-1.9-1.2v-17c0-1.3.8-1.8 1.9-1.2l11.4 6.6-3.3 3.3v-.4z"/></svg>
              {/* Apple */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-[#6B7280] hover:text-white cursor-pointer transition-colors"><path d="M16.5 14c-.1-3.1 2.5-4.6 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.6 1.1-.9 0-2.4-1-3.9-1-2 0-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.1 3 3.6 3 1.4-.1 2-.9 3.7-.9s2.2.9 3.8.9c1.6 0 2.5-1.5 3.5-2.9 1.1-1.7 1.6-3.3 1.6-3.4 0-.1-3.2-1.2-3.3-4.7zM14.8 5.3c.8-1 1.3-2.4 1.1-3.8-1.2.1-2.7.8-3.5 1.8-.7.8-1.3 2.2-1.1 3.6 1.3.1 2.7-.6 3.5-1.6z"/></svg>
            </div>
          </div>

          {/* Platform Column */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 font-syne text-lg tracking-wide">Platform</h4>
            <ul className="space-y-4 font-nunito text-[var(--text-secondary)] text-base">
              <li><Link to="/" className="hover:text-white transition-colors">Features</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Book a Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Partner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Marketing</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 font-syne text-lg tracking-wide">Resources</h4>
            <ul className="space-y-4 font-nunito text-[var(--text-secondary)] text-base">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Auth AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* FREE Tools Column */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 font-syne text-lg tracking-wide">FREE Tools</h4>
            <ul className="space-y-4 font-nunito text-[var(--text-secondary)] text-base">
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Button</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Generate WhatsApp Link</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Android app</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download iOS app</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 font-syne text-lg tracking-wide">Legal</h4>
            <ul className="space-y-4 font-nunito text-[var(--text-secondary)] text-base">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
