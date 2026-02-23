const imgUserProfile = "https://www.figma.com/api/mcp/asset/79877a4d-b40b-4337-8dde-6c65a2b0f763";

export default function OcrDetailedResultViewer() {
  const images = [
    { name: "1분기_매출_차트.png", desc: "2023 회계연도 지역 부서별 분기별 매출 성장을 나타내는 선 그래프입니다.", page: "01", selected: true },
    { name: "운영_통계_표.png", desc: "비용 절감 지표 및 KPI 목표를 보여주는 상세 운영 효율성 표입니다.", page: "04", selected: false },
    { name: "기업_브랜딩_로고.png", desc: "요약 보고서 헤더에서 추출된 주요 회사 로고입니다.", page: "01", selected: false },
    { name: "클라우드_아키텍처_인포그래픽.png", desc: "신경망 레이아웃 분석 파이프라인 및 데이터 흐름을 설명하는 아키텍처 다이어그램입니다.", page: "02", selected: false },
    { name: "서버_팜_사진.jpg", desc: "엔터프라이즈 데이터 센터 시설을 보여주는 12페이지의 스톡 사진입니다.", page: "12", selected: false },
    { name: "시장_점유율_그래프.png", desc: "2024년 전망에 대한 경쟁사별 시장 점유율을 분석한 파이 차트입니다.", page: "08", selected: false },
  ];

  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col isolate items-start relative size-full">
      {/* Header */}
      <div className="bg-white border-[#e5e7eb] border-b border-solid content-stretch flex h-[64px] items-center justify-between pb-[9px] pt-[8px] px-[24px] relative shrink-0 w-full z-[2]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]">
            <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
          </div>
          <span className="font-black text-[#111827] text-[18px] tracking-[-0.45px]">MH OCR AI</span>
        </div>
        <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
          <a href="/file-management" className="border-[#137fec] border-b-[3px] border-solid content-stretch flex h-full items-center px-[4px] font-bold text-[#137fec] text-[14px]">파일 관리</a>
          <a href="/analytics" className="content-stretch flex h-full items-center px-[4px] font-bold text-[#6b7280] text-[14px]">통계</a>
          <a href="/settings" className="content-stretch flex h-full items-center px-[4px] font-bold text-[#6b7280] text-[14px]">세팅</a>
        </nav>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <a href="#" className="font-bold text-[#4b5563] text-[14px]">MH Vector AI</a>
            <a href="#" className="font-bold text-[#4b5563] text-[14px]">MH Ontology AI</a>
          </div>
          <div className="bg-[#e5e7eb] h-[32px] shrink-0 w-px" />
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
              <span className="font-bold text-[#111827] text-[14px]">Alex Chen</span>
              <span className="font-bold text-[#137fec] text-[10px]">관리자</span>
            </div>
            <div className="bg-[#e5e7eb] border border-[#f3f4f6] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-full shrink-0 size-[36px]">
              <img alt="Alex Chen" className="w-full h-full object-cover rounded-full" src={imgUserProfile} />
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full z-[1]" style={{ minHeight: "calc(100vh - 64px)" }}>
        {/* Left Section - Image Gallery */}
        <div className="bg-white border-[#e5e7eb] border-r border-solid content-stretch flex flex-col items-start relative self-stretch flex-1">
          {/* Gallery Header */}
          <div className="bg-white border-[#f3f4f6] border-b border-solid relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
              <span className="font-bold text-[#111827] text-[18px]">추출된 데이터</span>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Search */}
                <div className="relative w-[320px]">
                  <input className="bg-[#f9fafb] border border-[#d1d5db] border-solid content-stretch flex h-[38px] items-center overflow-clip pl-[17px] pr-[41px] py-[9px] relative rounded-[8px] w-full font-normal text-[#9ca3af] text-[14px]" placeholder="추출 데이터 검색..." />
                  <span className="material-symbols-outlined absolute right-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af] text-[20px]">search</span>
                </div>
                {/* View toggles */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <button className="bg-[#eaf4ff] border border-[#d0e6ff] border-solid content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[40px]">
                    <span className="material-symbols-outlined text-[#137fec] text-[22px]">image</span>
                  </button>
                  <button className="bg-white border border-[#e5e7eb] border-solid content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[40px]">
                    <span className="material-symbols-outlined text-[#9ca3af] text-[22px]">description</span>
                  </button>
                </div>
                {/* Export */}
                <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                  <span className="material-symbols-outlined text-white text-[18px]">download</span>
                  <span className="font-bold text-white text-[14px]">이미지 내보내기</span>
                </button>
              </div>
            </div>
          </div>
          {/* Gallery Grid */}
          <div className="flex-1 min-h-px relative w-full">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative size-full">
              <div className="grid grid-cols-3 gap-[16px] w-full">
                {images.map((img, i) => (
                  <div key={i} className={`content-stretch flex flex-col isolate items-start overflow-clip rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${img.selected ? "border-2 border-[#137fec] bg-[rgba(19,127,236,0.02)] shadow-[0px_0px_0px_2px_#137fec,0px_1px_2px_0px_rgba(0,0,0,0.05)]" : "border border-[rgba(0,0,0,0)] bg-white"}`}>
                    <div className="aspect-[16/10] bg-[#f3f4f6] relative shrink-0 w-full overflow-hidden">
                      <img alt={img.name} className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full object-cover" src={imgUserProfile} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
                      <span className="font-bold text-[#111827] text-[14px] leading-[20px] truncate w-full">{img.name}</span>
                      <p className="font-normal text-[#6b7280] text-[12px] leading-[19.5px] line-clamp-2">{img.desc}</p>
                      <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full">
                        <div className="bg-[rgba(19,127,236,0.05)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                          <span className="font-bold text-[#137fec] text-[10px] tracking-[0.5px] uppercase">출처: {img.page} 페이지</span>
                        </div>
                        <span className="material-symbols-outlined text-[#9ca3af] text-[14px]">check_circle</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Pagination Footer */}
          <div className="bg-white border-[#f3f4f6] border-solid border-t h-[64px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between pt-px px-[24px] relative size-full">
              <button className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative">
                <span className="material-symbols-outlined text-[#6b7280] text-[24px]">arrow_back</span>
                <span className="font-medium text-[#6b7280] text-[14px]">이전</span>
              </button>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                <span className="font-bold text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase">페이지 1 / 112</span>
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
                  <button className="bg-[#137fec] content-stretch flex items-center justify-center rounded-[8px] shrink-0 size-[32px]">
                    <span className="font-bold text-white text-[12px]">1</span>
                  </button>
                  {["2", "3"].map((n) => (
                    <button key={n} className="content-stretch flex items-center justify-center rounded-[8px] shrink-0 size-[32px]">
                      <span className="font-medium text-[#111418] text-[12px]">{n}</span>
                    </button>
                  ))}
                  <div className="content-stretch flex items-center relative self-stretch shrink-0 px-[4px]">
                    <span className="font-normal text-[#9ca3af] text-[16px]">...</span>
                  </div>
                  <button className="content-stretch flex items-center justify-center rounded-[8px] shrink-0 size-[32px]">
                    <span className="font-medium text-[#111418] text-[12px]">112</span>
                  </button>
                </div>
              </div>
              <button className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative">
                <span className="font-bold text-[#137fec] text-[14px]">다음</span>
                <span className="material-symbols-outlined text-[#137fec] text-[24px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right Aside - Metadata */}
        <div className="bg-[#f6f7f8] border-[#e5e7eb] border-l border-solid content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[380px]">
          <div className="flex-1 min-h-px relative w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip p-[24px] relative size-full">
              {/* Metadata Header */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <span className="font-bold text-[#137fec] text-[18px] tracking-[-0.45px] uppercase">메타데이터</span>
                <button className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                  <span className="material-symbols-outlined text-[#9ca3af] text-[24px]">more_vert</span>
                </button>
              </div>
              {/* Selected Image Indicator */}
              <div className="bg-white border border-[#f3f4f6] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[13px] py-[9px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
                <span className="material-symbols-outlined text-[#137fec] text-[14px]">image</span>
                <span className="font-bold text-[#6b7280] text-[11px]">1분기_매출_차트.png</span>
              </div>
              {/* Metadata Fields */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <span className="font-bold text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase">페이지 번호</span>
                  <span className="font-bold text-[#111827] text-[14px] leading-[20px]">01</span>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <span className="font-bold text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase">AI 태그</span>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <span className="bg-[#dbeafe] px-[8px] py-[2px] rounded-[4px] font-bold text-[#1d4ed8] text-[10px]">REVENUE</span>
                    <span className="bg-[#f3e8ff] px-[8px] py-[2px] rounded-[4px] font-bold text-[#7e22ce] text-[10px]">CHART</span>
                    <span className="bg-[#dcfce7] px-[8px] py-[2px] rounded-[4px] font-bold text-[#15803d] text-[10px] uppercase">TRENDS</span>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <span className="font-bold text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase">연결된 컨텍스트 텍스트</span>
                  <div className="bg-white border border-[#f3f4f6] border-solid content-stretch flex flex-col items-start p-[13px] relative rounded-[12px] shrink-0 w-full">
                    <p className="font-normal text-[#4b5563] text-[12px] leading-[19.5px]">
                      {`"분기별 매출 차트(그림 1.1)에서 알 수 있듯이, 성장 궤도는 이전 회계 주기에서 설정된 엔터프라이즈 수준의 벤치마크와 일치합니다..."`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
