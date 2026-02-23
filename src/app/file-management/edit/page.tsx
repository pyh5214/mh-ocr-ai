const imgProfile = "https://www.figma.com/api/mcp/asset/4a3b2db7-8b49-4a19-a1ee-1e471aab15e6";
const imgImage = "https://www.figma.com/api/mcp/asset/eeb9572b-4ad2-4ba7-bede-afd0ac569c53";

export default function EditFileMetadata() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1024px] relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e5e7eb] border-b border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[80px] relative shrink-0 w-full z-[2]">
          <div className="content-stretch flex gap-[8px] items-center relative">
            <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[36px]">
              <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <span className="font-bold text-[#111418] text-[18px] tracking-[-0.45px]">MH OCR AI</span>
              <span className="font-medium text-[#617589] text-[10px]">무료 플랜</span>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative pl-[40px]">
            <div className="content-stretch flex items-center justify-between relative w-full">
              <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                <a href="/mh-ocr-ai/file-management" className="border-[#137fec] border-b-2 border-solid font-bold text-[#137fec] text-[15px]">파일 관리</a>
                <a href="/mh-ocr-ai/analytics" className="font-bold text-[#617589] text-[15px]">통계</a>
                <a href="/mh-ocr-ai/settings" className="font-bold text-[#617589] text-[15px]">세팅</a>
              </div>
              <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <a href="#" className="font-bold text-[#617589] text-[14px]">MHOCR</a>
                  <a href="#" className="font-bold text-[#617589] text-[14px]">MHOntology</a>
                </div>
                <div className="bg-[#d1d5db] h-[16px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-end relative shrink-0">
                    <span className="font-bold text-[#111418] text-[14px] text-right">Alex Johnson</span>
                  </div>
                  <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-full shrink-0 size-[36px]">
                    <img alt="Profile" className="w-full h-full object-cover" src={imgProfile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="content-stretch flex flex-col items-center pb-[121.73px] pt-[32px] px-[80px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1000px] relative shrink-0 w-[1000px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <h1 className="font-bold text-[#111418] text-[24px] leading-[32px]">파일 정보</h1>
              <p className="font-normal text-[#617589] text-[14px] leading-[20px]">업로드한 사용자 본인만 문서 정보를 수정할 수 있으며, OCR 텍스트 추출을 수행한 문서는 정보 수정이 불가능합니다.</p>
            </div>
            <div className="bg-white border border-[#f0f2f4] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative w-full">
                {/* Preview Panel */}
                <div className="bg-[#f8f9fb] border-[#f0f2f4] border-r border-solid content-stretch flex flex-col items-start pl-[32px] pr-[33px] py-[32px] relative self-stretch shrink-0 w-[416px]">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
                    <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase">VISIBILITY DOCUMENT PREVIEW</span>
                    <div className="bg-[#f3f4f6] border border-[#e5e7eb] border-solid content-stretch flex items-center justify-center overflow-clip pb-[35.94px] pt-[35.93px] px-px relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
                      <div className="relative w-[297px] h-[396px] overflow-hidden">
                        <img alt="Document preview" className="w-full h-full object-cover" src={imgImage} />
                      </div>
                      <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0" />
                    </div>
                    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[16px] relative shrink-0 w-full">
                      <button className="border border-[#137fec] border-solid content-stretch flex items-center justify-center p-px relative rounded-full shrink-0 size-[40px]">
                        <span className="material-symbols-outlined text-[#137fec] text-[24px]">add</span>
                      </button>
                      <button className="border border-[#137fec] border-solid content-stretch flex items-center justify-center p-px relative rounded-full shrink-0 size-[40px]">
                        <span className="material-symbols-outlined text-[#137fec] text-[24px]">remove</span>
                      </button>
                      <button className="border border-[#137fec] border-solid content-stretch flex items-center justify-center p-px relative shrink-0 size-[40px]">
                        <span className="material-symbols-outlined text-[#137fec] text-[24px]">open_in_full</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Form Panel */}
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative self-stretch shrink-0 flex-1">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <label className="font-bold text-[#111418] text-[14px]">파일명</label>
                      <input className="bg-white border border-[#dbe0e6] border-solid content-stretch flex h-[48px] items-start justify-center overflow-clip px-[17px] py-[12px] relative rounded-[8px] shrink-0 w-full font-normal text-[#111418] text-[16px]" defaultValue="invoice_q4_marketing.pdf" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <label className="font-bold text-[#111418] text-[14px]">버전</label>
                      <input className="bg-white border border-[#dbe0e6] border-solid content-stretch flex h-[48px] items-start justify-center overflow-clip px-[17px] py-[12px] relative rounded-[8px] shrink-0 w-full font-normal text-[#111418] text-[16px]" defaultValue="v2.4.0" />
                    </div>
                  </div>
                  <div className="bg-[#f0f2f4] h-px shrink-0 w-full" />
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase">INFO SYSTEM METADATA</span>
                    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full">
                      {[
                        { label: "크기", value: "12.8 MB" },
                        { label: "업로더", value: "Alex Johnson" },
                        { label: "날짜", value: "2023년 10월 24일" },
                      ].map((item) => (
                        <div key={item.label} className="bg-[#f8f9fb] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px p-[16px] relative rounded-[8px] self-stretch">
                          <span className="font-bold text-[#617589] text-[10px] uppercase">{item.label}</span>
                          <span className="font-medium text-[#111418] text-[14px] leading-[20px]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="bg-white border-[#f0f2f4] border-solid border-t relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between pb-[20px] pt-[21px] px-[24px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <button className="bg-white border border-[#fee2e2] border-solid content-stretch flex gap-[8px] items-center px-[21px] py-[9px] relative rounded-[8px] shrink-0">
                      <span className="material-symbols-outlined text-[#dc2626] text-[16px]">delete</span>
                      <span className="font-bold text-[#dc2626] text-[14px]">파일 삭제</span>
                    </button>
                    <button className="bg-white border border-[#dbe0e6] border-solid content-stretch flex gap-[8px] items-center px-[21px] py-[9px] relative rounded-[8px] shrink-0">
                      <span className="material-symbols-outlined text-[#111418] text-[16px]">description</span>
                      <span className="font-bold text-[#111418] text-[14px]">OCR 텍스트 추출</span>
                    </button>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <button className="border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[8px] shrink-0">
                      <span className="font-bold text-[#111418] text-[14px]">취소</span>
                    </button>
                    <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative rounded-[8px] shrink-0">
                      <span className="material-symbols-outlined text-white text-[16px]">save</span>
                      <span className="font-bold text-white text-[14px]">변경 사항 저장</span>
                    </button>
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
