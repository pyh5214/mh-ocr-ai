const imgUserProfile = "https://www.figma.com/api/mcp/asset/f554c3ff-0f1f-4847-ad67-678f8d095a85";

export default function SettingsDataManagementSubMain() {
  return (
    <div className="bg-[#f6f7f8] relative size-full min-h-screen">
      {/* Header */}
      <div className="absolute bg-white border-[#dbe0e6] border-b border-solid content-stretch flex h-[80px] items-center justify-between left-0 pb-[13px] pl-[40px] pr-[40px] pt-[12px] right-0 top-0">
        <div className="content-stretch flex gap-[16px] items-center relative">
          <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
            <span className="material-symbols-outlined text-white text-[24px]">grid_view</span>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <span className="font-bold text-[#111418] text-[20px] tracking-[-0.5px]">MH OCR AI</span>
          </div>
          <nav className="content-stretch flex gap-[32px] items-center pl-[48px] relative shrink-0">
            <a href="/mh-ocr-ai/file-management" className="font-bold text-[#617589] text-[14px]">파일 관리</a>
            <a href="/mh-ocr-ai/analytics" className="font-bold text-[#617589] text-[14px]">통계</a>
            <a href="/mh-ocr-ai/settings" className="border-[#137fec] border-b-2 border-solid font-bold text-[#137fec] text-[14px] pb-[6px]">세팅</a>
          </nav>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <a href="#" className="font-bold text-[#617589] text-[14px] uppercase">MH Vector AI</a>
            <a href="#" className="font-bold text-[#617589] text-[14px]">MH Ontology AI</a>
          </div>
          <div className="bg-[#dbe0e6] h-[24px] shrink-0 w-px" />
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col items-end relative shrink-0">
              <span className="font-bold text-[#111418] text-[14px]">Alex Chen</span>
              <span className="font-bold text-[#137fec] text-[10px]">관리자</span>
            </div>
            <div className="bg-[#ffedd5] border border-[#dbe0e6] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-full shrink-0 size-[40px]">
              <img alt="User profile" className="w-full h-full object-cover rounded-full" src={imgUserProfile} />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="absolute bg-[#f6f7f8] border-[#dbe0e6] border-b border-solid left-0 right-0 top-[80px]">
        <div className="px-[40px]">
          <div className="content-stretch flex gap-[32px] items-start overflow-clip relative w-full">
            {[
              { label: "사용자 프로필", active: false },
              { label: "템플릿 관리", active: true },
              { label: "데이터 관리", active: false },
              { label: "사용이력", active: false },
              { label: "버전 정보", active: false },
            ].map((tab) => (
              <button key={tab.label} className={`border-b-[3px] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative self-stretch shrink-0 font-bold text-[14px] tracking-[0.35px] ${tab.active ? "border-[#137fec] text-[#137fec]" : "border-[rgba(0,0,0,0)] text-[#617589]"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[225px] pb-[80px] px-[40px]">
        <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full">
          {/* Page Header */}
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[40px] relative shrink-0 w-full">
            <h1 className="font-black text-[#111418] text-[36px] tracking-[-0.9px] leading-[45px]">설정 및 템플릿</h1>
            <p className="font-normal text-[#617589] text-[16px] leading-[24px]">계정, 추출 템플릿 및 시스템 데이터, 이력을 관리합니다.</p>
          </div>

          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
            {/* User Profile Section */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="border-[#dbe0e6] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
                  <h2 className="font-bold text-[#111418] text-[20px] leading-[25px]">사용자 프로필</h2>
                  <p className="font-normal text-[#617589] text-[14px] leading-[20px]">개인 정보 및 로그인 자격 증명을 업데이트합니다.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-end p-[24px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch">
                    <label className="font-medium text-[#111418] text-[14px] leading-[20px]">사용자명</label>
                    <input className="bg-white border border-[#dbe0e6] border-solid content-stretch flex h-[48px] items-center overflow-clip px-[17px] py-[12px] relative rounded-[8px] shrink-0 w-full font-normal text-[#111418] text-[16px]" defaultValue="alex_chen_admin" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch">
                    <label className="font-medium text-[#111418] text-[14px] leading-[20px]">이메일 주소</label>
                    <input className="bg-white border border-[#dbe0e6] border-solid content-stretch flex h-[48px] items-center overflow-clip px-[17px] py-[12px] relative rounded-[8px] shrink-0 w-full font-normal text-[#111418] text-[16px]" defaultValue="alex.chen@enterprise.com" />
                  </div>
                </div>
                {/* Password Change */}
                <div className="border-[#dbe0e6] border-solid border-t content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative shrink-0 w-full">
                  <h3 className="font-bold text-[#111418] text-[16px] leading-[24px]">비밀번호 변경</h3>
                  <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
                    {["현재 비밀번호", "새 비밀번호", "새 비밀번호 확인"].map((label) => (
                      <div key={label} className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch">
                        <label className="font-medium text-[#111418] text-[14px] leading-[20px]">{label}</label>
                        <input type="password" className="bg-white border border-[#dbe0e6] border-solid h-[48px] overflow-clip px-[16px] relative rounded-[8px] shrink-0 w-full font-normal text-[#6b7280] text-[16px]" placeholder="••••••••" />
                      </div>
                    ))}
                  </div>
                </div>
                <button className="bg-[#137fec] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0">
                  <span className="font-bold text-white text-[16px] leading-[24px]">변경 사항 저장</span>
                </button>
              </div>
            </div>

            {/* Template Management Section */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center overflow-clip pb-[25px] pt-px px-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="border-[#dbe0e6] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                      <span className="material-symbols-outlined text-[#137fec] text-[24px]">description</span>
                      <h2 className="font-bold text-[#111418] text-[20px] leading-[25px]">템플릿 관리</h2>
                    </div>
                    <p className="font-normal text-[#617589] text-[14px] leading-[20px]">문서 파싱 템플릿을 생성하고 구성합니다.</p>
                  </div>
                  <button className="bg-[#137fec] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">add</span>
                    <span className="font-bold text-white text-[16px]">새 템플릿 추가</span>
                  </button>
                </div>
              </div>
              <div className="relative shrink-0 w-full px-[24px] pt-[24px]">
                <div className="content-stretch flex gap-[24px] items-start justify-start relative w-full">
                  {[
                    { icon: "receipt_long", name: "표준 송장", date: "최종 수정일: 2023년 10월 24일" },
                    { icon: "description", name: "구매 주문서", date: "최종 수정일: 2023년 10월 12일" },
                    { icon: "clinical_notes", name: "진단서", date: "최종 수정일: 2023년 9월 28일" },
                  ].map((template) => (
                    <div key={template.name} className="bg-[rgba(246,247,248,0.3)] border border-[#dbe0e6] border-solid relative rounded-[12px] shrink-0 flex-1 h-[160px]">
                      <div className="absolute content-stretch flex items-start justify-between left-[20px] right-[20px] top-[20px]">
                        <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0">
                          <span className="material-symbols-outlined text-[#137fec] text-[24px]">{template.icon}</span>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <button className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-full shrink-0">
                            <span className="material-symbols-outlined text-[#617589] text-[20px]">edit</span>
                          </button>
                          <button className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-full shrink-0">
                            <span className="material-symbols-outlined text-[#617589] text-[20px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[20px] top-[76px]">
                        <span className="font-bold text-[#111418] text-[18px] leading-[28px]">{template.name}</span>
                        <span className="font-normal text-[#617589] text-[12px] leading-[16px]">{template.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Management Section */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="border-[#dbe0e6] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <span className="material-symbols-outlined text-[#137fec] text-[24px]">database</span>
                    <h2 className="font-bold text-[#111418] text-[20px] leading-[25px]">데이터 관리</h2>
                  </div>
                  <p className="font-normal text-[#617589] text-[14px] leading-[20px]">소스 파일, 추출된 메타데이터 및 애플리케이션 로그를 관리합니다.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full">
                <div className="bg-[#fef2f2] border border-[#fee2e2] border-solid content-stretch flex gap-[16px] items-start p-[17px] relative rounded-[8px] shrink-0 w-full">
                  <span className="material-symbols-outlined text-[#ef4444] text-[24px]">report</span>
                  <div>
                    <span className="font-bold text-[#b91c1c] text-[14px] block">심각한 경고</span>
                    <p className="font-normal text-[#dc2626] text-[14px] leading-[20px]">데이터 초기화를 수행하면 업로드된 모든 소스 PDF 파일과 추출된 모든 메타데이터/로그가 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.</p>
                    <p className="font-bold text-[#b91c1c] text-[12px] pt-[4px]">해당 내용은 관리자 권한을 가진 사용자만 실행할 수 있습니다.</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
                  {[
                    { title: "소스 PDF 파일 (Minio)", desc: "1,248개 파일 (4.2 GB)" },
                    { title: "추출된 메타데이터 (MongoDB)", desc: "15.2k 레코드 / 85.4k 로그 이벤트" },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#f6f7f8] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px p-[16px] relative rounded-[8px] self-stretch">
                      <div>
                        <span className="font-bold text-[#111418] text-[16px] block">{item.title}</span>
                        <span className="font-normal text-[#617589] text-[14px]">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="bg-[#ef4444] content-stretch flex gap-[8px] items-center justify-center opacity-80 py-[12px] relative rounded-[8px] shrink-0 w-full">
                  <span className="material-symbols-outlined text-white text-[24px]">delete_sweep</span>
                  <span className="font-bold text-white text-[16px]">모든 사용자 업로드 및 추출된 데이터 삭제 (관리자 전용)</span>
                </button>
              </div>
            </div>

            {/* Usage History Section */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between px-[24px] py-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                      <span className="material-symbols-outlined text-[#137fec] text-[24px]">history</span>
                      <h2 className="font-bold text-[#111418] text-[20px] leading-[25px]">사용이력</h2>
                    </div>
                    <p className="font-normal text-[#617589] text-[14px] leading-[20px]">시스템에 대한 주요 사용 이력을 확인합니다.</p>
                  </div>
                  <a href="/mh-ocr-ai/settings/history" className="bg-[#137fec] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0">
                    <span className="font-bold text-white text-[16px] leading-[24px]">이력 확인</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Version Info Section */}
            <div className="bg-white border border-[#dbe0e6] border-solid content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full mb-[80px]">
              <div className="border-[#dbe0e6] border-b border-solid relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <span className="material-symbols-outlined text-[#137fec] text-[24px]">info</span>
                    <h2 className="font-bold text-[#111418] text-[20px] leading-[25px]">버전 정보</h2>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start p-[24px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[312px]">
                  <div>
                    <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase block">앱 버전</span>
                    <span className="font-black text-[#111418] text-[24px] leading-[32px]">v2.4.0-stable</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase block">빌드 날짜</span>
                    <span className="font-medium text-[#111418] text-[16px] leading-[24px]">2023년 10월 27일</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase block">엔진</span>
                    <span className="font-medium text-[#111418] text-[16px] leading-[24px]">Tesseract OCR v5.3</span>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 flex-1">
                  <span className="font-bold text-[#617589] text-[12px] tracking-[0.6px] uppercase">변경 이력</span>
                  <div className="border-[#137fec] border-l-2 border-solid content-stretch flex flex-col gap-[4px] items-start pl-[18px] py-[4px] relative shrink-0 w-full">
                    <span className="font-bold text-[#111418] text-[14px] leading-[20px]">v2.4.0</span>
                    <ul className="font-normal text-[#617589] text-[12px] leading-[16px] space-y-[3.5px] list-none m-0 p-0">
                      <li>필기체 인식 정확도 15% 개선</li>
                      <li>다중 열 PDF 레이아웃 지원 추가</li>
                      <li>검색 쿼리 속도 향상을 위한 MongoDB 인덱싱 최적화</li>
                      <li>템플릿 관리 시스템 도입</li>
                    </ul>
                  </div>
                  <div className="border-[#dbe0e6] border-l-2 border-solid content-stretch flex flex-col gap-[4px] items-start pl-[18px] py-[4px] relative shrink-0 w-full">
                    <span className="font-bold text-[#617589] text-[14px] leading-[20px]">v2.3.5</span>
                    <ul className="font-normal text-[#617589] text-[12px] leading-[16px] space-y-[3.5px] list-none m-0 p-0">
                      <li>배치 처리의 메모리 누수 수정</li>
                      <li>Minio S3 연결에 대한 보안 업데이트</li>
                    </ul>
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
