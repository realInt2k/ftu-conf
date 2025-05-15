import { Section } from '@/layout/Section';
import { AppConfig } from '@/utils/AppConfig';
import { TimelineItem } from "@/small-components/TimelineItem";

const DescriptionCard = () => (
    <>
      <Section
          yPadding={'pt-12 rounded-t-md'}
          titleColor={AppConfig.text_primary_color_dark}
          title="Về hội thảo"
          descriptionColor={AppConfig.text_secondary_color_dark}
          description=""
          bgColor={`${AppConfig.bg_light}`}
      >
          <div className={`px-10 mt-4 text-xl text-justify ${AppConfig.text_secondary_color_dark}`}>
              Hội thảo Quốc gia lần thứ nhất về Toán ứng dụng, Khoa học Máy tính và
              Phân tích Dữ liệu trong Kinh tế - Kinh doanh do Khoa Công nghệ và Khoa học Dữ liệu, Trường Đại học Ngoại thương tổ chức,
              dự kiến sẽ diễn ra tại Hà Nội vào các ngày 6-7 tháng 8 năm 2025.
              Hội thảo được tổ chức nhằm tạo ra một nền tảng nghiên cứu kết nối các nhà khoa học,
              giảng viên và học giả để thảo luận, chia sẻ những phát hiện,
              đổi mới và mối quan tâm trong lĩnh vực khoa học máy tính và khoa học dữ liệu.
              Đồng thời, thúc đẩy sự hợp tác giữa các nhà nghiên cứu trong nước, khuyến khích việc trình bày và công bố các ý tưởng sáng tạo.
          </div>
      </Section>
      <Section
          yPadding={'pt-4 pb-12 rounded-b-md'}
          titleColor={AppConfig.text_primary_color_dark}
          title="Các mốc thời gian"
          bgColor={`${AppConfig.bg_light}`}
      >
          <div className={`md:justify-center md:flex`}>
              <ul className="timeline md:timeline-horizontal timeline-vertical">
                  <TimelineItem check={true} start={true} date={'20/06/2025'} description={'Toàn văn báo cáo'}/>
                  <TimelineItem middle={true} date={'20/07/2025'} description={'Chấp nhận đăng kỷ yếu'}/>
                  <TimelineItem middle={true} date={'30/07/2025'} description={'Xuất bản kỷ yếu'}/>
                  <TimelineItem middle={true} date={'12/08/2025'} description={'Đăng ký tham dự'}/>
                  <TimelineItem end={true} date={'16/08/2025'} description={'Tổ chức Hội thảo'}/>
              </ul>
          </div>
      </Section>
    </>
);

export { DescriptionCard };
