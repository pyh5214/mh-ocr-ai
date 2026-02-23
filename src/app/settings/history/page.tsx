const imgImage = "https://www.figma.com/api/mcp/asset/db46c081-5e70-4666-8154-c7d4c4a7caa8";

export default function SystemHistoryPage() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1129px] overflow-clip relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e5e7eb] border-b border-solid content-stretch flex h-[80px] items-center justify-between pb-[17px] pl-[40px] pr-[40.01px] pt-[16px] relative shrink-0 w-full z-[2]">
          <div className="content-stretch flex gap-[16px] items-center relative">
            <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
              <span className="material-symbols-outlined text-white text-[28px]">grid_view</span>
            </div>
            <span className="font-black text-[#111418] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
          </div>
          <nav className="content-stretch flex gap-[48px] items-center relative">
            <a href="/file-management" className="font-bold text-[#6b7280] text-[16px]">파일 관리</a>
            <a href="/analytics" className="font-bold text-[#6b7280] text-[16px]">통계</a>
            <a href="/settings" className="font-bold text-[#111418] text-[16px] border-b-[3px] border-[#137fec] pb-[22px] mt-[22px]">세팅</a>
          </nav>
          <div className="content-stretch flex gap-[32px] items-center relative">
            <div className="content-stretch flex gap-[31.99px] items-center relative shrink-0">
              <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Vector AI</a>
              <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Ontology AI</a>
            </div>
            <div className="bg-[#e5e7eb] h-[40px] shrink-0 w-px" />
            <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-end relative shrink-0">
                <span className="font-black text-[#111418] text-[16px]">Alex Chen</span>
                <span className="font-bold text-[#137fec] text-[12px]">관리자</span>
              </div>
              <div className="bg-[#e5e7eb] content-stretch flex flex-col items-start p-[2px] relative rounded-full shrink-0">
                <div className="relative rounded-full shrink-0 size-[40px] overflow-hidden">
                  <img alt="Alex Chen" className="w-full h-full object-cover" src={imgImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="content-stretch flex flex-col items-start max-w-[1280px] pb-[58px] pt-[48px] px-[40px] relative shrink-0 w-full z-[1]">
          {/* Page Header */}
          <div className="content-stretch flex items-end justify-between pb-[40px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <h1 className="font-black text-[#111418] text-[36px] tracking-[-0.9px] leading-[45px]">시스템 사용이력 상세 조회</h1>
              <p className="font-normal text-[#6b7280] text-[16px] leading-[24px]">시스템 내 모든 사용자 활동 로그를 실시간으로 모니터링하고 추적합니다.</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              <button className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[25px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                <span className="material-symbols-outlined text-[#374151] text-[18px]">calendar_today</span>
                <span className="font-bold text-[#374151] text-[14px]">기간 설정</span>
              </button>
              <button className="bg-[#137fec] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[24px] relative rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2)] shrink-0">
                <span className="material-symbols-outlined text-white text-[18px]">download</span>
                <span className="font-bold text-white text-[14px]">CSV 내보내기</span>
              </button>
            </div>
          </div>
          {/* Filter Bar */}
          <div className="pb-[24px] relative shrink-0 w-full">
            <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="content-stretch flex items-center relative w-full">
                <div className="content-stretch flex gap-[24px] items-center flex-1 relative">
                  <span className="font-bold text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase">활동 유형 필터</span>
                  <div className="content-stretch flex gap-[8px] items-center flex-1 relative">
                    {["전체", "파일 업로드", "파일 삭제", "OCR 추출", "DB 초기화", "템플릿 추가", "템플릿 삭제"].map((filter, i) => (
                      <button key={filter} className={`content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-full shrink-0 ${i === 0 ? "bg-[#137fec] border border-[#137fec] border-solid text-white" : "bg-[#f9fafb] border border-[#e5e7eb] border-solid text-[#4b5563]"} font-medium text-[14px]`}>
                        {filter}
                      </button>
                    ))}
                    <div className="content-stretch flex flex-1 items-end justify-end relative">
                      <div className="relative w-[192px]">
                        <input className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex h-[36px] items-start overflow-clip pl-[37px] pr-[13px] py-[8px] relative rounded-[8px] shrink-0 w-full font-normal text-[#9ca3af] text-[14px]" placeholder="사용자 아이디 검색" />
                        <span className="material-symbols-outlined absolute left-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af] text-[18px]">search</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f9fafb] border-[#e5e7eb] border-b border-solid">
                  <th className="px-[24px] py-[16px] font-bold text-[#6b7280] text-[12px] tracking-[1.2px] uppercase text-center">사용자 ID</th>
                  <th className="px-[24px] py-[16px] font-bold text-[#6b7280] text-[12px] tracking-[1.2px] uppercase text-center">활동 이력</th>
                  <th className="px-[24px] py-[16px] font-bold text-[#6b7280] text-[12px] tracking-[1.2px] uppercase text-center">일시 (YYYY-MM-DD HH:mm:ss)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: "admin_01", action: "OCR 추출", actionColor: "#1d4ed8", actionBg: "#dbeafe", actionBorder: "#bfdbfe", time: "2023-10-27 14:30:05" },
                  { user: "user_03", action: "파일 업로드", actionColor: "#047857", actionBg: "#d1fae5", actionBorder: "#a7f3d0", time: "2023-10-27 14:15:22" },
                  { user: "admin_01", action: "템플릿 추가", actionColor: "#4338ca", actionBg: "#e0e7ff", actionBorder: "#c7d2fe", time: "2023-10-27 13:50:11" },
                  { user: "manager_v2", action: "파일 삭제", actionColor: "#be123c", actionBg: "#ffe4e6", actionBorder: "#fecdd3", time: "2023-10-27 13:45:00" },
                  { user: "user_03", action: "OCR 추출", actionColor: "#1d4ed8", actionBg: "#dbeafe", actionBorder: "#bfdbfe", time: "2023-10-27 13:20:15" },
                  { user: "admin_02", action: "DB 초기화", actionColor: "#b45309", actionBg: "#fef3c7", actionBorder: "#fde68a", time: "2023-10-27 13:10:45" },
                  { user: "manager_v2", action: "템플릿 삭제", actionColor: "#334155", actionBg: "#f1f5f9", actionBorder: "#e2e8f0", time: "2023-10-27 12:55:30" },
                  { user: "user_05", action: "파일 업로드", actionColor: "#047857", actionBg: "#d1fae5", actionBorder: "#a7f3d0", time: "2023-10-27 12:40:12" },
                  { user: "admin_01", action: "OCR 추출", actionColor: "#1d4ed8", actionBg: "#dbeafe", actionBorder: "#bfdbfe", time: "2023-10-27 12:30:00" },
                  { user: "manager_v2", action: "템플릿 추가", actionColor: "#4338ca", actionBg: "#e0e7ff", actionBorder: "#c7d2fe", time: "2023-10-27 12:15:55" },
                ].map((row, i) => (
                  <tr key={i} className="border-[#f3f4f6] border-solid border-t">
                    <td className="px-[24px] py-[19.5px] font-medium text-[#111827] text-[14px] text-center">{row.user}</td>
                    <td className="px-[24px] py-[16.5px] text-center">
                      <span className="inline-flex items-center justify-center px-[13px] py-[5px] rounded-full font-bold text-[12px]" style={{ color: row.actionColor, backgroundColor: row.actionBg, border: `1px solid ${row.actionBorder}` }}>
                        {row.action}
                      </span>
                    </td>
                    <td className="px-[24px] py-[19.5px] font-mono text-[#6b7280] text-[14px] text-center">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="bg-[rgba(249,250,251,0.5)] border-[#f3f4f6] border-solid border-t relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between pb-[20px] pt-[21px] px-[24px] relative w-full">
                <span className="font-normal text-[#6b7280] text-[14px]">1,240개 중 <strong className="text-[#111827]">1-10</strong> 표시 중</span>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {["chevron_left", null, null, null, null, "chevron_right"].map((icon, i) => (
                    icon ? (
                      <button key={i} className="bg-white border border-[#e5e7eb] border-solid content-stretch flex items-center justify-center p-px relative rounded-[4px] shrink-0 size-[36px]">
                        <span className="material-symbols-outlined text-[#9ca3af] text-[18px]">{icon}</span>
                      </button>
                    ) : (
                      <button key={i} className={`content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px] ${i === 1 ? "bg-[#137fec] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-bold text-white text-[14px]" : "bg-white border border-[#e5e7eb] border-solid font-medium text-[#4b5563] text-[14px]"}`}>
                        {i === 1 ? "1" : i === 2 ? "2" : i === 3 ? "3" : "124"}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
