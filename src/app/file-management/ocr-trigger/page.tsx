const imgAlexChen = "https://www.figma.com/api/mcp/asset/c3a9575c-acc9-4c19-8a0a-32da2261e4b1";
const imgSarahChen = "https://www.figma.com/api/mcp/asset/01437aec-df1a-47fe-be14-a0b8bba0b8ea";
const imgSvg = "https://www.figma.com/api/mcp/asset/7f1eb48f-1fe6-41b4-a615-06a71bf8c110";

export default function FileManagementOcrTrigger() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1024px] relative shrink-0 w-full">
        <div className="bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-center pb-px relative shrink-0 w-full z-[2]">
          <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
              <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]">
                    <span className="material-symbols-outlined text-white text-[20px]">grid_view</span>
                  </div>
                  <span className="font-black text-[#1e293b] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="/mh-ocr-ai/file-management" className="border-[#137fec] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#137fec] text-[15px]">파일 관리</a>
                  <a href="/mh-ocr-ai/analytics" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#475569] text-[15px]">통계</a>
                  <a href="/mh-ocr-ai/settings" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#475569] text-[15px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[32px] h-full items-center pb-[20.25px] pt-[19.25px] relative shrink-0">
                  <a href="#" className="font-bold text-[#475569] text-[15px]">MH Vector AI</a>
                  <a href="#" className="font-bold text-[#475569] text-[15px]">MH Ontology AI</a>
                </div>
                <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <span className="font-black text-[#1e293b] text-[15px] text-right">Alex Chen</span>
                    <span className="font-bold text-[#137fec] text-[11px] text-right">관리자</span>
                  </div>
                  <div className="border border-[#f1f5f9] border-solid relative rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] overflow-hidden">
                    <img alt="Alex Chen" className="w-full h-full object-cover" src={imgAlexChen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[65.5px] pt-[40px] px-[192px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <h2 className="font-bold text-[#0f172a] text-[30px] leading-[36px]">OCR 텍스트 추출</h2>
              <p className="font-normal text-[#64748b] text-[16px] leading-[24px]">문서의 자동 텍스트 추출 파이프라인을 설정하고 시작합니다.</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              {/* File Info Header */}
              <div className="border-[#f1f5f9] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pb-[33px] pt-[32px] px-[32px] relative w-full">
                  <div className="content-stretch flex items-center justify-between relative w-full">
                    <div className="content-stretch flex gap-[20px] items-center relative">
                      <div className="bg-[#eff6ff] border border-[#dbeafe] border-solid content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[56px]">
                        <span className="material-symbols-outlined text-[#137fec] text-[30px]">account_tree</span>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                        <h1 className="font-bold text-[#0f172a] text-[20px] leading-[28px]">Q4_Invoice_2023.pdf</h1>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                          <span className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid px-[9px] py-[3px] rounded-[4px] font-bold text-[#64748b] text-[10px]">v2.1</span>
                          <span className="text-[#cbd5e1] text-[14px]">•</span>
                          <span className="text-[#64748b] text-[14px]">4.2 MB</span>
                          <span className="text-[#cbd5e1] text-[14px]">•</span>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                            <div className="relative rounded-full shrink-0 size-[20px] overflow-hidden">
                              <img alt="Sarah Chen" className="w-full h-full object-cover" src={imgSarahChen} />
                            </div>
                            <span className="text-[#475569] text-[14px]">Sarah Chen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0">
                      <span className="font-bold text-[#94a3b8] text-[11px] tracking-[0.55px] uppercase">추출 템플릿</span>
                      <div className="bg-white border border-[#e2e8f0] border-solid h-[42px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[208px] flex items-center px-[16px]">
                        <span className="font-bold text-[#334155] text-[14px]">영수증 추출</span>
                        <span className="material-symbols-outlined text-[#94a3b8] text-[20px] ml-auto">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Center Content */}
              <div className="h-[570px] relative shrink-0 w-full flex flex-col items-center justify-center gap-[16px]">
                <div className="bg-[rgba(19,127,236,0.05)] content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[128px]">
                  <div className="absolute border-2 border-[rgba(19,127,236,0.2)] border-dashed inset-0 rounded-full" />
                  <div className="bg-white border border-[#f8fafc] border-solid content-stretch flex items-center justify-center p-px relative rounded-full shrink-0 size-[96px]">
                    <span className="material-symbols-outlined text-[#137fec] text-[48px]">hub</span>
                  </div>
                </div>
                <h2 className="font-bold text-[#0f172a] text-[24px] leading-[32px]">추출 준비 완료</h2>
                <p className="font-normal text-[#64748b] text-[16px] text-center leading-[26px] max-w-[448px]">
                  고급 OCR 파이프라인을 실행하여 LLM 기반 엔진으로 텍스트, 복잡한 표 및 시각적 요소를 자동으로 분석합니다.
                </p>
                <a href="/mh-ocr-ai/file-management/processing" className="bg-[#137fec] content-stretch flex gap-[12px] items-center px-[40px] py-[16px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mt-[8px]">
                  <span className="material-symbols-outlined text-white text-[24px]">bolt</span>
                  <span className="font-bold text-white text-[18px]">OCR 텍스트 추출 시작</span>
                </a>
                {/* Progress Steps */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[768px] mt-[40px]">
                  <div className="-translate-y-1/2 absolute bg-[#f1f5f9] h-[4px] left-0 right-0 rounded-full top-1/2" />
                  <div className="content-stretch flex items-start justify-between pl-[16px] pr-[16.01px] relative shrink-0 w-full">
                    {["문서 스캔", "텍스트, 표, 이미지 추출", "LLM 정제", "DB 저장"].map((step) => (
                      <div key={step} className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
                        <div className="bg-[#e2e8f0] border-2 border-solid border-white relative rounded-full shrink-0 size-[12px]" />
                        <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0">
                          <span className="font-bold text-[#94a3b8] text-[12px] text-center tracking-[-0.3px]">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="bg-[rgba(248,250,252,0.5)] border-[#f1f5f9] border-solid border-t relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center gap-[32px] pb-[16px] pt-[17px] px-[32px] relative w-full">
                  {[
                    { icon: "speed", label: "고성능 처리" },
                    { icon: "security", label: "암호화 보안" },
                    { icon: "history", label: "버전 관리" },
                  ].map((item) => (
                    <div key={item.label} className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <span className="material-symbols-outlined text-[#94a3b8] text-[16px]">{item.icon}</span>
                      <span className="font-bold text-[#94a3b8] text-[11px] tracking-[0.275px] uppercase">{item.label}</span>
                    </div>
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
