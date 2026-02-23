const imgAlexChen = "https://www.figma.com/api/mcp/asset/e557fd99-6656-4b7b-a079-fc9029b9389a";
const imgBackgroundOverlayBorder = "https://www.figma.com/api/mcp/asset/3167e712-78a2-44c5-bf29-85aedc59fe33";

export default function FileManagementNewFileUploadStart() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1280px] relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-center pb-px relative shrink-0 w-full z-[2]">
          <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full">
            <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
              <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
                    <span className="material-symbols-outlined text-white text-[18px]">grid_view</span>
                  </div>
                  <span className="font-bold text-[#0f172a] text-[18px] tracking-[-0.45px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="/mh-ocr-ai/file-management" className="border-[#137fec] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#137fec] text-[15px]">파일 관리</a>
                  <a href="/mh-ocr-ai/analytics" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">통계</a>
                  <a href="/mh-ocr-ai/settings" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Vector AI</a>
                  <a href="#" className="font-bold text-[#4b5563] text-[15px]">MH Ontology AI</a>
                </div>
                <div className="bg-[#e2e8f0] h-[24px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-end relative shrink-0">
                    <span className="font-bold text-[#1e293b] text-[14px]">Alex Chen</span>
                    <span className="font-bold text-[#137fec] text-[11px]">관리자</span>
                  </div>
                  <div className="border border-[#e2e8f0] border-solid relative rounded-full shrink-0 size-[36px] overflow-hidden">
                    <img alt="Alex Chen" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgAlexChen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="content-stretch flex flex-col items-start pb-[85px] pt-[40px] px-[192px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <h1 className="font-bold text-[#0f172a] text-[24px] leading-[32px]">파일 업로드 및 정보 입력</h1>
              <p className="font-normal text-[#64748b] text-[14px] leading-[20px]">업로드할 파일을 선택하고 상세 정보를 입력해 주세요.</p>
            </div>

            {/* Drag and Drop Area */}
            <div
              className="border-2 border-[rgba(19,127,236,0.3)] border-dashed content-stretch flex flex-col h-[358px] items-start px-[224px] py-[42px] relative rounded-[12px] shrink-0 w-full"
              style={{ backgroundImage: `url('${imgBackgroundOverlayBorder}'), linear-gradient(90deg, rgba(239,246,255,0.3) 0%, rgba(239,246,255,0.3) 100%)`, backgroundSize: "67px 100px, auto auto", backgroundPosition: "top left" }}
            >
              <div className="h-[298.75px] max-w-[448px] relative shrink-0 w-[448px]">
                {/* Upload icon */}
                <div className="-translate-x-1/2 absolute bg-white border border-[#f1f5f9] border-solid content-stretch flex items-center justify-center left-1/2 p-px rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[64px] top-0">
                  <span className="material-symbols-outlined text-[#137fec] text-[36px]">upload_file</span>
                </div>
                {/* Heading */}
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[84px]">
                  <span className="font-bold text-[#0f172a] text-[18px] text-center leading-[28px]">새 문서 드래그 앤 드롭</span>
                </div>
                {/* Description */}
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[120px]">
                  <p className="font-normal text-[#64748b] text-[14px] text-center leading-[22.75px]">여기에 파일을 끌어다 놓거나 버튼을 클릭하여 선택하세요.</p>
                </div>
                {/* Button */}
                <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[174.75px]">
                  <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[12px] relative rounded-[8px] shrink-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                    <span className="material-symbols-outlined text-white text-[18px]">search</span>
                    <span className="font-bold text-white text-[14px]">파일 찾기</span>
                  </button>
                </div>
                {/* Footer */}
                <div className="absolute border-[rgba(226,232,240,0.5)] border-solid border-t content-stretch flex flex-col items-start left-0 pt-[25px] right-0 top-[258.75px]">
                  <div className="content-stretch flex flex-col items-center relative w-full">
                    <span className="font-bold text-[#94a3b8] text-[10px] text-center tracking-[1px] uppercase leading-[15px]">50 MB 이하 PDF 문서만 지원합니다.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* File Info Form */}
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="bg-[rgba(248,250,252,0.5)] border-[#f1f5f9] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[17px] pt-[16px] px-[24px] relative w-full">
                  <span className="material-symbols-outlined text-[#137fec] text-[20px]">description</span>
                  <span className="font-bold text-[#1e293b] text-[14px]">파일 상세 정보</span>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative shrink-0 w-full">
                <div className="h-[356px] relative shrink-0 w-full">
                  {/* 파일명 & 파일 사이즈 */}
                  <div className="absolute content-stretch flex gap-[24px] items-start left-0 right-0 top-0">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일명</label>
                      <div className="relative w-full">
                        <div className="absolute bottom-[16.67%] left-[12px] top-[16.67%] flex items-center">
                          <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">attachment</span>
                        </div>
                        <div className="bg-[#f8fafc] border border-[#f1f5f9] border-solid content-stretch flex items-center opacity-60 overflow-clip px-[17px] py-[11px] pl-[38px] relative rounded-[8px] shrink-0 w-full">
                          <span className="font-normal text-[#cbd5e1] text-[14px]">-</span>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 사이즈</label>
                      <div className="relative w-full">
                        <div className="absolute bottom-[16.67%] left-[12px] top-[16.67%] flex items-center">
                          <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">database</span>
                        </div>
                        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip px-[17px] py-[11px] pl-[38px] relative rounded-[8px] shrink-0 w-full">
                          <span className="font-normal text-[#64748b] text-[14px]">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 파일 버전 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[94px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 버전</label>
                    <input className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex h-[42px] items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] shrink-0 w-full font-normal text-[#94a3b8] text-[14px]" placeholder="V1.0" />
                  </div>
                  {/* 파일 설명 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[188px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 설명</label>
                    <textarea className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-start min-h-[140px] overflow-clip pb-[109px] pt-[11px] px-[17px] relative rounded-[8px] shrink-0 w-full font-normal text-[#94a3b8] text-[14px] resize-none" placeholder="파일에 대한 간단한 설명을 입력해 주세요." />
                  </div>
                </div>
                {/* Footer */}
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <span className="material-symbols-outlined text-[#94a3b8] text-[14px]">info</span>
                    <span className="font-normal text-[#94a3b8] text-[12px] leading-[16px]">모든 필수 항목을 확인 후 업로드를 시작하세요.</span>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <button className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0">
                      <span className="font-bold text-[#64748b] text-[14px]">취소</span>
                    </button>
                    <button className="bg-[#e2e8f0] content-stretch flex gap-[8px] items-center px-[32px] py-[10px] relative rounded-[8px] shrink-0" disabled>
                      <span className="material-symbols-outlined text-[#94a3b8] text-[18px]">cloud_upload</span>
                      <span className="font-bold text-[#94a3b8] text-[14px]">업로드 시작</span>
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
