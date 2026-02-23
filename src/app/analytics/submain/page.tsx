const imgBackground = "https://www.figma.com/api/mcp/asset/6c9db6ef-690b-4662-9412-e5da6dc97cc2";
const imgImage = "https://www.figma.com/api/mcp/asset/0058a173-2b9d-4eaa-a407-6181c5aae0ea";
const imgImage1 = "https://www.figma.com/api/mcp/asset/988d66b2-21be-4482-80c1-2267f6b45e48";
const imgImage2 = "https://www.figma.com/api/mcp/asset/2b869b18-ed74-49e5-8fbf-3354bfd6d9a6";
const imgImage3 = "https://www.figma.com/api/mcp/asset/dbbf06e7-2325-4cd6-bc4b-175d0ecf1afd";

export default function AnalyticsDashboardSubMain() {
  const statCards = [
    { icon: "upload_file", label: "전체 업로드 파일", value: "1,284", trend: "+12.5%", trendUp: true },
    { icon: "task_alt", label: "OCR 완료", value: "1,240", trend: "+15.2%", trendUp: true },
    { icon: "hourglass_empty", label: "대기 중인 작업", value: "44", trend: "-4.8%", trendUp: false },
  ];

  const barData = [
    { month: "1월", height: 180, active: false },
    { month: "2월", height: 200, active: false },
    { month: "3월", height: 160, active: false },
    { month: "4월", height: 190, active: false },
    { month: "5월", height: 220, active: true },
    { month: "6월", height: 140, active: false },
  ];

  const recentActivities = [
    { icon: "check_circle", color: "#078838", bg: "rgba(7,136,56,0.1)", file: "Invoice_March_2024.pdf", desc: "12개 필드 추출 성공 • 2분 전" },
    { icon: "sync", color: "#137fec", bg: "rgba(19,127,236,0.1)", file: "Passport_Scan_John.png", desc: "OCR 처리 중 • 5분 전" },
    { icon: "check_circle", color: "#078838", bg: "rgba(7,136,56,0.1)", file: "Receipt_4922.jpg", desc: "5개 필드 추출 성공 • 14분 전" },
    { icon: "error", color: "#e73908", bg: "rgba(231,57,8,0.1)", file: "Contract_Draft_v2.docx", desc: "추출 실패: 지원하지 않는 파일 형식 • 1시간 전" },
    { icon: "check_circle", color: "#078838", bg: "rgba(7,136,56,0.1)", file: "Bank_Statement_Q1.pdf", desc: "82개 필드 추출 성공 • 2시간 전" },
  ];

  const userStats = [
    { name: "Alex Johnson", img: imgImage, uploads: 452, ocr: 438 },
    { name: "Sarah Miller", img: imgImage1, uploads: 384, ocr: 370 },
    { name: "David Chen", img: imgImage2, uploads: 312, ocr: 305 },
    { name: "Maria Garcia", img: imgImage3, uploads: 136, ocr: 127 },
  ];

  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start justify-center relative size-full">
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#dbe0e6] border-b border-solid content-stretch flex h-[80px] items-center justify-between pb-[13px] pt-[12px] px-[40px] relative shrink-0 w-full z-[2]">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]">
                <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
              </div>
              <span className="font-bold text-[#1e293b] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
            </div>
            <nav className="content-stretch flex gap-[32px] items-center relative shrink-0">
              <a href="/mh-ocr-ai/file-management" className="font-bold text-[#6b7280] text-[14px]">파일 관리</a>
              <div className="relative">
                <a href="/mh-ocr-ai/analytics" className="font-bold text-[#137fec] text-[14px]">통계</a>
                <div className="absolute bg-[#137fec] bottom-[-20px] h-[3px] left-0 right-0" />
              </div>
              <a href="/mh-ocr-ai/settings" className="font-bold text-[#6b7280] text-[14px]">세팅</a>
            </nav>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <a href="#" className="font-bold text-[#6b7280] text-[14px]">MH Vector AI</a>
              <a href="#" className="font-bold text-[#6b7280] text-[14px]">MH Ontology AI</a>
            </div>
            <div className="bg-[#e5e7eb] h-[24px] shrink-0 w-px" />
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-end relative shrink-0">
                <span className="font-bold text-[#111418] text-[14px]">Alex Chen</span>
                <span className="font-bold text-[#137fec] text-[11px]">관리자</span>
              </div>
              <div className="relative rounded-full shrink-0 size-[40px] overflow-hidden">
                <img alt="Alex Chen" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgBackground} />
                <div className="absolute inset-0 rounded-full shadow-[0px_0px_0px_1px_#e5e7eb]" />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1440px] px-[40px] py-[32px] relative shrink-0 w-full z-[1]">
          {/* Page Header */}
          <div className="content-stretch flex h-[130px] items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
              <h1 className="font-black text-[#111418] text-[30px] tracking-[-0.99px] leading-[37.5px]">통계 대시보드 개요</h1>
              <p className="font-normal text-[#617589] text-[16px] leading-[24px]">문서 업로드 처리 현황과 OCR 추출 결과에 대한 통계 개요입니다.</p>
            </div>
            <button className="bg-white border border-[#e5e7eb] border-solid content-stretch flex h-[44px] items-center justify-between px-[25px] py-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 gap-[8px]">
              <span className="material-symbols-outlined text-[#374151] text-[18px]">calendar_today</span>
              <span className="font-bold text-[#374151] text-[14px]">기간 설정</span>
            </button>
          </div>

          {/* Stat Cards */}
          <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
            {statCards.map((card) => (
              <div key={card.label} className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px p-[25px] relative rounded-[12px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
                    <span className="material-symbols-outlined text-[#137fec] text-[24px]">{card.icon}</span>
                  </div>
                  <div className="px-[8px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: card.trendUp ? "rgba(7,136,56,0.1)" : "rgba(231,57,8,0.1)" }}>
                    <span className="font-bold text-[12px]" style={{ color: card.trendUp ? "#078838" : "#e73908" }}>{card.trend}</span>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
                  <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase leading-[16px]">{card.label}</span>
                  <span className="font-black text-[#111418] text-[30px] leading-[37.5px]">{card.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full">
            {/* Bar Chart */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[12px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex-[2_0_0]">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <h2 className="font-bold text-[#111418] text-[20px] leading-[28px]">OCR 추출 진행률</h2>
                  <p className="font-normal text-[#617589] text-[14px] leading-[20px]">최근 6개월간의 성과 내역</p>
                </div>
                <div className="content-stretch flex flex-col items-end relative shrink-0">
                  <span className="font-black text-[#137fec] text-[30px] text-right leading-[36px]">98.5%</span>
                  <span className="font-medium text-[#078838] text-[14px] text-right leading-[21px]">평균 대비 +0.5%</span>
                </div>
              </div>
              <div className="border-[#f0f2f4] border-b border-solid min-h-[300px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-end justify-center min-h-[inherit] pb-[9px] pt-[43px] px-[16px] relative w-full">
                  {barData.map((bar) => (
                    <div key={bar.month} className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 flex-1">
                      <div
                        className="max-w-[48px] rounded-[8px] w-[48px]"
                        style={{
                          height: `${bar.height}px`,
                          backgroundColor: bar.active ? "#137fec" : "rgba(19,127,236,0.2)"
                        }}
                      />
                      <span className={`font-bold text-[12px] leading-[16px] ${bar.active ? "text-[#111418]" : "text-[#617589]"}`}>{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[12px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex-[1_0_0]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <h2 className="font-bold text-[#111418] text-[20px] leading-[28px]">최근 활동</h2>
                <a href="/mh-ocr-ai/analytics" className="font-bold text-[#137fec] text-[14px]">전체 보기</a>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                {recentActivities.map((activity, i) => (
                  <div key={i} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[32px]" style={{ backgroundColor: activity.bg }}>
                      <span className="material-symbols-outlined text-[16px]" style={{ color: activity.color }}>{activity.icon}</span>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <span className="font-bold text-[#111418] text-[14px] leading-[14px]">{activity.file}</span>
                      <span className="font-normal text-[#617589] text-[11px] leading-[16.5px] mt-[4px]">{activity.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Stats */}
          <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
            <h2 className="font-bold text-[#111418] text-[20px] leading-[28px]">사용자별 처리 통계</h2>
            <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
              {userStats.map((user) => (
                <div key={user.name} className="bg-[rgba(246,247,248,0.3)] border border-[#f0f2f4] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px p-[21px] relative rounded-[8px] self-stretch">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="relative rounded-full shrink-0 size-[40px] overflow-hidden">
                      <img alt={user.name} className="absolute left-0 max-w-none size-full top-0 object-cover" src={user.img} />
                    </div>
                    <span className="font-bold text-[#111418] text-[14px] leading-[20px]">{user.name}</span>
                  </div>
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <span className="font-normal text-[#617589] text-[11px] leading-[16.5px]">업로드 파일</span>
                      <span className="font-bold text-[#111418] text-[11px] leading-[16.5px]">{user.uploads}</span>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <span className="font-normal text-[#617589] text-[11px] leading-[16.5px]">OCR 추출</span>
                      <span className="font-bold text-[#137fec] text-[11px] leading-[16.5px]">{user.ocr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
