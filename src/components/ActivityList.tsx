
import React from "react";

export const ActivityList = () => {
  return (
    <div className="w-[772px] h-auto bg-white shadow-md rounded-[10px] p-5 max-md:w-full">
      <h2 className="text-2xl font-semibold mb-5 text-[#333]">List of your activity</h2>
      <div className="flex gap-[15px] flex-wrap">
        <div className="flex items-center gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] hover:border-[#F7A61C] transition-colors">
          <span className="text-base font-semibold text-[#F7A61C]">0</span>
          <span className="text-sm">My courses</span>
          <svg
            className="w-[11px] h-[13px] transform-[rotate(90deg)]"
            viewBox="0 0 14 11"
            fill="none"
          >
            <path
              d="M7.88124 10.8423L13.1665 5.52954L7.88124 0.216778C7.8335 0.154095 7.77286 0.1024 7.70341 0.0651924C7.63396 0.0279845 7.55733 0.00613274 7.4787 0.00111606C7.40007 -0.00390063 7.32129 0.00803525 7.24767 0.0361153C7.17406 0.0641953 7.10734 0.107764 7.05203 0.163872C6.99671 0.21998 6.9541 0.287317 6.92708 0.361325C6.90005 0.435333 6.88924 0.514283 6.89538 0.592831C6.90152 0.67138 6.92447 0.747692 6.96266 0.816602C7.00086 0.885512 7.05341 0.945411 7.11677 0.992244L11.0711 4.97957L0.550061 4.97957C0.404199 4.97957 0.264311 5.03751 0.16117 5.14065C0.0580301 5.24379 8.58307e-05 5.38368 8.58307e-05 5.52954C8.58307e-05 5.67541 0.0580301 5.81529 0.16117 5.91844C0.264311 6.02158 0.404199 6.07952 0.550061 6.07952L11.0711 6.07952L7.11677 10.0668C7.01394 10.1704 6.95646 10.3106 6.95697 10.4565C6.95749 10.6025 7.01596 10.7422 7.11952 10.8451C7.22308 10.9479 7.36325 11.0054 7.5092 11.0049C7.65514 11.0043 7.7949 10.9459 7.89774 10.8423H7.88124Z"
              fill="#F7A61C"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] hover:border-[#F7A61C] transition-colors">
          <span className="text-base font-semibold text-[#F7A61C]">0</span>
          <span className="text-sm">My chances</span>
          <svg
            className="w-[11px] h-[13px] transform-[rotate(90deg)]"
            viewBox="0 0 14 11"
            fill="none"
          >
            <path
              d="M7.88124 10.8423L13.1665 5.52954L7.88124 0.216778C7.8335 0.154095 7.77286 0.1024 7.70341 0.0651924C7.63396 0.0279845 7.55733 0.00613274 7.4787 0.00111606C7.40007 -0.00390063 7.32129 0.00803525 7.24767 0.0361153C7.17406 0.0641953 7.10734 0.107764 7.05203 0.163872C6.99671 0.21998 6.9541 0.287317 6.92708 0.361325C6.90005 0.435333 6.88924 0.514283 6.89538 0.592831C6.90152 0.67138 6.92447 0.747692 6.96266 0.816602C7.00086 0.885512 7.05341 0.945411 7.11677 0.992244L11.0711 4.97957L0.550061 4.97957C0.404199 4.97957 0.264311 5.03751 0.16117 5.14065C0.0580301 5.24379 8.58307e-05 5.38368 8.58307e-05 5.52954C8.58307e-05 5.67541 0.0580301 5.81529 0.16117 5.91844C0.264311 6.02158 0.404199 6.07952 0.550061 6.07952L11.0711 6.07952L7.11677 10.0668C7.01394 10.1704 6.95646 10.3106 6.95697 10.4565C6.95749 10.6025 7.01596 10.7422 7.11952 10.8451C7.22308 10.9479 7.36325 11.0054 7.5092 11.0049C7.65514 11.0043 7.7949 10.9459 7.89774 10.8423H7.88124Z"
              fill="#F7A61C"
            />
          </svg>
        </div>
        <div className="text-sm gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] flex items-center hover:border-[#F7A61C] transition-colors">
          No counsellor assigned
        </div>
        <button className="h-10 bg-[#022859] hover:bg-[#033a7a] text-sm font-semibold text-white px-5 rounded-[20px] transition-colors">
          Log in / Sign up
        </button>
      </div>
    </div>
  );
};
