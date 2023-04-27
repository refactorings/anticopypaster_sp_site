import '../styles/Documentation.css';
import '../styles/Links.css';

function Documentation() {
    return (
        <div className="flexbox">
            <div className='m-4 p-4 items-center flex-col flex-grow'>
                <h3 className="font-medium leading-tight text-2xl m-2 text-zinc-600 mb-8">Project Deliverables:</h3>
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://docs.google.com/document/d/1MjN8cIFJxX2y1wPUVOCOWonoWTahiBIBZIv2SXpesTc/edit?usp=sharing">Semester Update Document</a>
                <iframe title="semesterUpdateDoc" className="DocStyle m-6 mt-8 mb-4 border-l-4 pl-4" src="https://docs.google.com/document/d/e/2PACX-1vSDmJSc10a7TiHnt1JqP8Vd56BqSUNgoyUE2i45ZDIdVGddz8VLzLdaqb0i1sOux4PYhMVyryOd0QIu/pub?embedded=true"></iframe>
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://docs.google.com/document/d/1MjN8cIFJxX2y1wPUVOCOWonoWTahiBIBZIv2SXpesTc/edit?usp=sharing">Our Final Plan</a>
                <iframe title="finalPlanDoc" className="DocStyle m-6 mt-8 mb-4 border-l-4 pl-4" src="https://docs.google.com/document/d/e/2PACX-1vR85m3AgLCHR9M6-wOtBcUtTyeSspjiaomCagURzsiJRpeizruDs3_WkSkU_811Ud7xVBIvdNyhmZcU/pub?embedded=true"></iframe>
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://docs.google.com/document/d/1PI0WF8ciA6L70ifxCM2B5onAWbS4awFqExqZKKp-aHE/edit?usp=sharing">Our Project Tools and Technologies</a>
                <iframe title="toolsAndTechniquesDoc" className="DocStyle m-6  mt-8 mb-4 border-l-4 pl-4" src="https://docs.google.com/document/d/e/2PACX-1vSEbRSYswsEt7SzcOlcuK2pqLqeWwJP2hZsemvAJ9dceJlhTHzolr1IDiTVgSMTVMYaPsiQ0xQuUtY2/pub?embedded=true"></iframe>
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://docs.google.com/document/d/1vXMzqkiCJqForGTieC9HzBNU_UvUXssrsETK0HIMdcs/edit?usp=sharing">Development Methodology</a> 
                <iframe title="devMethodologyDoc" className="DocStyle m-6 mt-8 mb-4 border-l-4 pl-4" src="https://docs.google.com/document/d/e/2PACX-1vRvPdUD9LFh27tnAi8R_9QndGYS_HOyLfrzIno_wNznu7NtPSZtHEgjPQ5z6RXVa1G31j174vXwA6VQ/pub?embedded=true"></iframe>      
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://drive.google.com/file/d/11J2y3Fqx97AoB4LBqONpsVgWrMAPAUBU/view?usp=sharing">Wireframes</a> 
                <iframe title="wireframesDoc" className="DocStyle m-6 mt-8 mb-4 border-l-4 pl-4" src="https://drive.google.com/file/d/11J2y3Fqx97AoB4LBqONpsVgWrMAPAUBU/preview" width="640" height="480" allow="autoplay"></iframe>
                
                <a className='font-medium leading-tight text-xl m-6 mt-8 text-zinc-600' href="https://drive.google.com/file/d/1fJ87U72qAxtplVoTRQVguHSlRLf9X4nm/view?usp=sharing">UML Diagram</a> 
                <iframe title="umlDoc" className="DocStyle m-6 mt-8 mb-4 border-l-4 pl-4" src="https://drive.google.com/file/d/1fJ87U72qAxtplVoTRQVguHSlRLf9X4nm/preview" width="640" height="480" allow="autoplay"></iframe>
                
            </div>

            {/* SMALL RIGHT COLUMN */}
            <div className='m-4 p-4 items-center flex-col flex-shrink'>

                {/* PROJECT DOCUMENTATION */}
                <h3 class="font-medium leading-tight text-2xl mt-2 text-zinc-600">Project Documentation:</h3><br /> 

                {/* BUILD DOCUMENTATION */}
                <div className="mt-2 mb-4 pl-1">
                    <h4 class="font-medium leading-tight text-2xl mt-2 mb-2 text-zinc-600">Build Requirements:</h4>
                    <div className="border-l-4">
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1MjN8cIFJxX2y1wPUVOCOWonoWTahiBIBZIv2SXpesTc/edit?usp=sharing">Instructions</a><br />
                    </div>
                </div>

                {/* METRICS DOCUMENTATION */}
                <div className="mt-2 mb-4 pl-1">
                    <h4 class="font-medium leading-tight text-2xl mt-2 mb-2 text-zinc-600">Metrics Documentation:</h4>
                    <div className="border-l-4">
                        {/* <a className='font-medium leading-tight text-l m-2' href="">TITLE</a><br /> */}
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1eDYSmdQ1mk26TYgQa8wtxAfeu77ZFJJS7wr-kB5ctbw/edit?usp=sharing">Metrics Accessing</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1GvpuKEpH6r1rGMntyHEDSn6ieagcyE-rXubb7o34lrQ/edit?usp=sharing">Checkbox - Team Solution</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1PmQkkRlkUVlk8fIbh6w7K39vR3y9Kr3awKSRQQIWKlk/edit?usp=sharing">Metrics Model</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1xLTQ1vxRi52qAmp_oaNGRHprMv4e3ZCSHsxmrbBain8/edit?usp=sharing">Metrics Confirmation</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1ERwV720ybmnNFEELAJFDlMnKKPDhNsU0mWZstFf8xqs/edit?usp=sharing">Design for Metrics Model</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1a8ccXxpQ15gqm1jsXB9vKBfwT1YkFwsxW81hgVAI4vk/edit?usp=sharing">Metrics Calculations</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1tQp9RLzKaE1oRlwub58oMFZoahvI8CQHtQcn3zMWvzw/edit?usp=sharing">How To Get Metrics</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1i7wQCCdR3C0Ga0VQC8QQtTVMVHNVV6MjHmFS7SDzmig/edit?usp=sharing">Product Metrics</a><br />
                        <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/spreadsheets/d/1CtILEFpBqZKo2zFkn2WRNSQSE4iKI-r1ZC8O4G5NFvA/edit?usp=sharing">Product Metrics (Spreadsheet)</a><br />
                    </div>
                </div>


                {/* MEETING AGENDAS */}
                <div className="mt-2 mb-4">
                    <h3 class="font-medium leading-tight text-2xl text-zinc-600">Meeting Agendas:</h3> 
                    {/* SPRING 2023 AGENDAS */}
                    <div className="mt-2 mb-4">
                        <h5 class="font-medium leading-tight text-2xl mb-4 text-zinc-600">Spring 2023:</h5>
                        <div className="border-l-4">
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1106FzKPF4yqO5lN07j_GPunuL0g4-NK4cwd4DB1_zfo/edit?usp=sharing">2/23/2023</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1iszjs7ujbjEVMS5FNytC7J1qEoW2ETKymDCUlzXF12E/edit?usp=sharing">2/16/2023</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1MhhM4ADZ1A6WUC6R31czAjHdazvhDjUrtGwXsH8OSLw/edit?usp=sharing">2/2/2023</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1Ata4Heb7PtjGy0PvyLVR4FzOAiKfRUsbqVmauFFwods/edit?usp=sharing">1/26/2023</a><br />
                        </div>
                    </div>

                    {/* FALL 2022 AGENDAS */}
                    <div className="mt-2 mb-4">
                        <h5 class="font-medium leading-tight text-2xl mb-4 text-zinc-600">Fall 2022:</h5>
                        <div className="border-l-4">
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1flzmGGGPCjWQO3M5OpgxulRM7JVTGNcRgSG6283M7EI/edit?usp=sharing">12/1/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1f5UGFBcfumoDvS3jtTGm_HwVkRvWI_kJALlLT71xI1Y/edit?usp=sharing">11/17/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1LlIXf86P5oYf6G8mZMzKhWTlcS3-s8oqFzZ6U5NQO4g/edit?usp=sharing">11/10/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/19y57AXoAMbc-9vJ0rvvg2F95E46WYnb94QGv_yxzoG4/edit?usp=sharing">11/3/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1wfgESSq1hSqltaoyY5nvYij4RNrBp4M6SIkl03c8s08/edit?usp=sharing">10/20/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1f-az5Ein_bkNgphAl3EXZ32KcNvKrDJTcpoM9uU5eMk/edit?usp=sharing">10/6/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1ZSnfqUxowGJcSabjp3dl5CW-auqA3xlHIACWLrAZVVE/edit?usp=sharing">9/29/2022</a><br />
                            <a className='font-medium leading-tight text-l m-2' href="https://docs.google.com/document/d/1VOrSSmaGers3O8Sv_W8HOKeNcKYO-Ip3rDX0VjDN7B8/edit?usp=sharing">9/15/2022</a>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Documentation;