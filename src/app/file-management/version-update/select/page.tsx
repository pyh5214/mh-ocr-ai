const imgAlexChen = "https://www.figma.com/api/mcp/asset/d01eee02-aeea-4578-af9b-8d4cd24c5566";
const imgSvg = "https://www.figma.com/api/mcp/asset/2db85d3f-f5e4-4788-b71e-d7a8541aa52d";

export default function FileManagementVersionUpdateFileSelect() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1395px] relative shrink-0 w-full">
        {/* Header */}
        <div className="bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col h-[80px] items-center justify-center pb-px relative shrink-0 w-full z-[2]">
          <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full">
            <div className="content-stretch flex items-center justify-between pl-[24px] pr-[23.99px] relative size-full">
              <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
                    <span className="material-symbols-outlined text-white text-[18px]">grid_view</span>
                  </div>
                  <span className="font-bold text-[#0f172a] text-[18px] tracking-[-0.45px]">MH OCR AI</span>
                </div>
                <nav className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                  <a href="/file-management" className="border-[#137fec] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#137fec] text-[15px]">파일 관리</a>
                  <a href="/analytics" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">통계</a>
                  <a href="/settings" className="border-[rgba(0,0,0,0)] border-b-2 border-solid content-stretch flex h-full items-center pb-[21.75px] pt-[18.25px] px-[4px] relative shrink-0 font-bold text-[#4b5563] text-[15px]">세팅</a>
                </nav>
              </div>
              <div className="content-stretch flex gap-[32px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[32px] h-full items-center pb-[20.25px] pt-[19.25px] relative shrink-0">
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
        <div className="content-stretch flex flex-col items-center pb-[322.5px] pt-[40px] px-[295px] relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-[896px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <h1 className="font-bold text-[#0f172a] text-[24px] leading-[32px]">버전업 파일 업로드 및 정보 입력</h1>
              <p className="font-normal text-[#64748b] text-[14px] leading-[20px]">파일 업로드 준비가 완료되었습니다. 상세 정보를 확인 후 업로드 해주세요.</p>
            </div>

            {/* File Selected Preview */}
            <div className="bg-[rgba(238,246,255,0.5)] border-2 border-[rgba(19,127,236,0.4)] border-solid content-stretch flex flex-col h-[358px] items-center justify-center p-[34px] relative rounded-[12px] shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-center justify-end py-[16px] relative w-full">
                  <div className="bg-white border border-[rgba(19,127,236,0.1)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[80px] mb-[16px]">
                    <span className="material-symbols-outlined text-[#137fec] text-[48px]">description</span>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                    <span className="font-bold text-[#0f172a] text-[18px] text-center leading-[28px]">2024_Manual_Update_Draft.pdf</span>
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <span className="font-medium text-[#64748b] text-[14px]">4.5 MB</span>
                      <div className="bg-[#cbd5e1] rounded-full shrink-0 size-[4px]" />
                      <span className="font-bold text-[#137fec] text-[12px] tracking-[0.6px] uppercase">선택 완료</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="absolute right-[16px] top-[16px] rounded-full size-[32px] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#94a3b8] text-[24px]">close</span>
              </button>
            </div>

            {/* File Info Form */}
            <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="bg-[rgba(248,250,252,0.5)] border-[#f1f5f9] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[17px] pt-[16px] px-[24px] relative w-full">
                  <span className="material-symbols-outlined text-[#137fec] text-[20px]">description</span>
                  <span className="font-bold text-[#1e293b] text-[14px]">파일 상세 정보</span>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative shrink-0 w-full">
                {/* 원본 파일명 */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-bold text-[#334155] text-[14px] leading-[20px]">원본 파일명</label>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] shrink-0 w-full">
                    <span className="font-normal text-[#94a3b8] text-[14px]">2024_Manual_Draft.pdf</span>
                  </div>
                </div>

                <div className="h-[364.5px] relative shrink-0 w-full">
                  {/* 파일명 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-[431px] top-0">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일명</label>
                    <div className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px] shrink-0 w-full">
                      <span className="font-normal text-[#0f172a] text-[14px]">2024_Manual_Update_Draft.pdf</span>
                    </div>
                  </div>
                  {/* 파일 사이즈 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[431px] right-0 top-0">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 사이즈</label>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex flex-[1_0_0] items-center overflow-clip px-[17px] py-[11px] relative rounded-[8px]">
                        <span className="font-normal text-[#64748b] text-[14px]">4.5</span>
                      </div>
                      <span className="font-bold text-[#64748b] text-[14px]">MB</span>
                    </div>
                  </div>
                  {/* 파일 버전 관리 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[94px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 버전 관리</label>
                    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[70.5px] relative rounded-[8px] shrink-0 w-full">
                      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[16px] top-1/2">
                        <span className="font-bold text-[#94a3b8] text-[11px] uppercase tracking-[-0.275px] leading-[16.5px]">기존 버전</span>
                        <span className="font-bold text-[#334155] text-[14px] leading-[20px]">1.0</span>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[74.19px] px-[8px] top-[18.25px]">
                        <div className="bg-[#e2e8f0] h-[32px] shrink-0 w-px" />
                      </div>
                      <div className="-translate-y-1/2 absolute content-stretch flex gap-[24px] items-center left-[106.19px] top-1/2">
                        <label className="content-stretch flex gap-[7px] items-center relative shrink-0 cursor-pointer">
                          <div className="bg-[#137fec] border border-[rgba(0,0,0,0)] border-solid content-stretch flex items-center justify-center p-px relative rounded-full shrink-0 size-[18px]">
                            <img alt="" className="absolute block max-w-none size-full" src={imgSvg} />
                          </div>
                          <span className="font-medium text-[#334155] text-[14px] leading-[20px]">마이너 버전업 (+0.1)</span>
                        </label>
                        <label className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
                          <div className="bg-white border border-[#cbd5e1] border-solid rounded-full shrink-0 size-[16px]" />
                          <span className="font-medium text-[#334155] text-[14px] leading-[20px]">메이저 버전업 (+1.0)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* 파일 설명 */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[216.5px]">
                    <label className="font-bold text-[#334155] text-[14px] leading-[20px]">파일 설명</label>
                    <textarea className="bg-white border border-[#e2e8f0] border-solid content-stretch flex items-start min-h-[120px] overflow-clip pb-[89px] pt-[11px] px-[17px] relative rounded-[8px] shrink-0 w-full font-normal text-[#0f172a] text-[14px] resize-none leading-[20px]" defaultValue="Dell740 사용자 매뉴얼입니다" />
                  </div>
                </div>

                {/* Footer */}
                <div className="border-[#f1f5f9] border-solid border-t content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <span className="material-symbols-outlined text-[#137fec] text-[14px]">check_circle</span>
                    <span className="font-medium text-[#137fec] text-[12px] leading-[16px]">모든 정보가 입력되었습니다.</span>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <button className="content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0">
                      <span className="font-bold text-[#64748b] text-[14px]">취소</span>
                    </button>
                    <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center px-[32px] py-[10px] relative rounded-[8px] shrink-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                      <span className="material-symbols-outlined text-white text-[18px]">cloud_upload</span>
                      <span className="font-bold text-white text-[14px]">업로드 시작</span>
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
