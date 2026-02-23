const imgAlexChen = "https://www.figma.com/api/mcp/asset/9a25bf92-d8f1-4300-a017-081c0b364d9d";

export default function FileManagementOcrProcessing() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1069px] relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-center pb-px relative shrink-0 w-full z-[2]">
          <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full">
            <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
              <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
                    <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
                  </div>
                  <span className="font-bold text-[#0f172a] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="/mh-ocr-ai/file-management" className="border-[#137fec] border-b-2 border-solid content-stretch flex h-full items-center px-[4px] font-bold text-[#137fec] text-[14px]">파일 관리</a>
                  <a href="/mh-ocr-ai/analytics" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center px-[4px] font-bold text-[#64748b] text-[14px]">통계</a>
                  <a href="/mh-ocr-ai/settings" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center px-[4px] font-bold text-[#64748b] text-[14px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex h-full items-center relative shrink-0 gap-[32px]">
                <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                  <a href="#" className="font-bold text-[#64748b] text-[14px]">MH Vector AI</a>
                  <a href="#" className="font-bold text-[#64748b] text-[14px]">MH Ontology AI</a>
                </div>
                <div className="bg-[#e2e8f0] h-[32px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
                    <span className="font-bold text-[#0f172a] text-[14px] text-right">Alex Chen</span>
                    <span className="font-bold text-[#137fec] text-[11px] text-right">관리자</span>
                  </div>
                  <div className="border border-[#e2e8f0] border-solid relative rounded-full shrink-0 size-[40px] overflow-hidden">
                    <img alt="Alex Chen" className="w-full h-full object-cover" src={imgAlexChen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="content-stretch flex flex-col items-start pb-[56px] pt-[40px] px-[128px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1024px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <h1 className="font-bold text-[#0f172a] text-[24px] leading-[32px]">OCR 텍스트 추출 진행 중</h1>
              <p className="font-normal text-[#64748b] text-[14px] leading-[20px]">문서에 대한 고급 AI 분석을 실행하고 있습니다</p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full">
              {/* Main Processing Panel */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[672px]">
                <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[32px] items-start p-[33px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
                  {/* Progress Bar */}
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[0.5px] items-start relative shrink-0">
                        <span className="font-bold text-[#137fec] text-[12px] tracking-[1.2px] uppercase">활성 작업</span>
                        <span className="font-bold text-[#0f172a] text-[18px]">LLM을 활용한 이미지 분석</span>
                      </div>
                      <span className="font-bold text-[#0f172a] text-[24px]">65%</span>
                    </div>
                    <div className="bg-[#f1f5f9] h-[12px] overflow-clip relative rounded-full shrink-0 w-full">
                      <div className="absolute bg-[#137fec] inset-[0_35%_0_0] rounded-full" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                      <span className="material-symbols-outlined text-[#64748b] text-[14px]">sync</span>
                      <span className="font-normal text-[#64748b] text-[14px]">24페이지 중 12페이지 처리 중...</span>
                    </div>
                  </div>
                  {/* Steps */}
                  <div className="border-[#f1f5f9] border-solid border-t relative shrink-0 w-full pt-[25px]">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
                      {[
                        { icon: "check", color: "#10b981", bg: "#10b981", title: "문서 전처리", desc: "최적화 및 형식 검증", status: "성공", statusColor: "#10b981" },
                        { icon: "check", color: "#10b981", bg: "#10b981", title: "텍스트 및 표 추출", desc: "고성능 OCR 엔진 실행", status: "성공", statusColor: "#10b981" },
                        { icon: "refresh", color: "white", bg: "#137fec", title: "LLM을 활용한 이미지 분석", desc: "차트 및 시각 자료의 맥락 이해", status: "진행 중", statusColor: "#137fec" },
                        { icon: "4", color: "#94a3b8", bg: "#f1f5f9", title: "메타데이터 합성", desc: "최종 데이터 구조화 및 태깅", status: "대기 중", statusColor: "#cbd5e1", opacity: "0.5" },
                      ].map((step, i) => (
                        <div key={i} className={`content-stretch flex gap-[12px] items-center py-[12px] relative w-full${step.opacity ? " opacity-50" : ""}`}>
                          <div className={`content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[24px]`} style={{ backgroundColor: step.bg }}>
                            <span className={`material-symbols-outlined text-[12px] text-white`} style={{ color: step.color === "white" ? "white" : "white" }}>{step.icon}</span>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <span className="font-bold text-[14px] leading-[20px]" style={{ color: step.statusColor === "#10b981" ? "#0f172a" : step.statusColor === "#137fec" ? "#137fec" : "#64748b" }}>{step.title}</span>
                            <span className="font-normal text-[#94a3b8] text-[12px] leading-[16px]">{step.desc}</span>
                          </div>
                          <span className="font-bold text-[10px] uppercase" style={{ color: step.statusColor }}>{step.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="content-stretch flex gap-[16px] items-center justify-center pt-[8px] relative w-full">
                    <button className="bg-white border border-[#e2e8f0] border-solid content-stretch flex gap-[8px] items-center px-[33px] py-[11px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                      <span className="material-symbols-outlined text-[#475569] text-[18px]">close</span>
                      <span className="font-bold text-[#475569] text-[14px]">프로세스 취소</span>
                    </button>
                    <button className="bg-[#f1f5f9] content-stretch flex gap-[8px] items-center px-[32px] py-[10px] relative rounded-[8px] shrink-0" disabled>
                      <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">sync</span>
                      <span className="font-bold text-[#94a3b8] text-[14px]">처리 중...</span>
                    </button>
                  </div>
                </div>
                {/* Log Console */}
                <div className="bg-[#0b1222] border border-[#1e293b] border-solid h-[220px] overflow-clip relative rounded-[12px] shrink-0 w-full">
                  <div className="absolute border-[#1e293b] border-b border-solid content-stretch flex h-[36.5px] items-center justify-between left-[24px] pb-[18px] right-[24px] top-[24px]">
                    <span className="font-bold text-[#64748b] text-[12px] tracking-[1.2px] uppercase">실행 로그</span>
                    <span className="font-medium text-[rgba(16,185,129,0.8)] text-[12px]">실시간 연결 활성화</span>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[75.5px] gap-[4px]">
                    <p className="font-mono text-[#94a3b8] text-[12px]"><span className="text-[#475569]">[14:22:01]</span> GPT-4 비전 모듈 초기화 중...</p>
                    <p className="font-mono text-[#94a3b8] text-[12px]"><span className="text-[#475569]">[14:22:05]</span> 10페이지 처리 중: 막대 그래프 2개, 다이어그램 1개 발견</p>
                    <p className="font-mono text-[#94a3b8] text-[12px]"><span className="text-[#475569]">[14:22:12]</span> 10페이지 분석 완료. 신뢰도: 0.982</p>
                    <p className="font-mono text-[#cbd5e1] text-[12px]"><span className="text-[#475569]">[14:22:28]</span> 12페이지 처리 중: 포함된 금융 표 분석 중...</p>
                  </div>
                  <div className="absolute bg-[rgba(19,127,236,0.8)] h-[16px] left-[24px] top-[178px] w-[4px]" />
                </div>
              </div>
              {/* Sidebar */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[320px]">
                <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[24px] items-start p-[25px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
                  <span className="font-bold text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase">파일 정보</span>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="bg-[#fef2f2] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]">
                      <span className="material-symbols-outlined text-[#ef4444] text-[24px]">picture_as_pdf</span>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <span className="font-bold text-[#0f172a] text-[14px]">product_catalog_2024.pdf</span>
                      <span className="font-normal text-[#64748b] text-[12px]">12.5 MB • 24 페이지</span>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <span className="font-bold text-[#94a3b8] text-[10px] uppercase">버전</span>
                      <span className="font-medium text-[#334155] text-[14px]">v3.4 (수정본)</span>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <span className="font-bold text-[#94a3b8] text-[10px] uppercase">업로더</span>
                      <span className="font-normal text-[#334155] text-[14px]">Alex Chen</span>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <span className="font-bold text-[#94a3b8] text-[10px] uppercase">생성 일자</span>
                      <span className="font-medium text-[#334155] text-[14px]">2023년 10월 10일 • 오전 11:45</span>
                    </div>
                  </div>
                </div>
                {/* Time Estimate */}
                <div className="bg-[#2563eb] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full shadow-[0px_10px_15px_-3px_#bfdbfe,0px_4px_6px_-4px_#bfdbfe]">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <span className="material-symbols-outlined text-white text-[24px]">info</span>
                    <p className="font-medium text-white text-[12px] leading-[19.5px]">문서의 복잡도와 이미지 밀도에 따라 처리 시간이 달라질 수 있습니다.</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full">
                    <span className="font-bold text-white text-[10px] tracking-[1px] uppercase opacity-80">예상 남은 시간</span>
                    <span className="font-bold text-white text-[18px] leading-[28px]">~ 1분 45초</span>
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
