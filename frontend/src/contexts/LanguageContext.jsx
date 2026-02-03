import { createContext, useContext, useState, useEffect } from 'react'
import contentData from '../about.json'

const LanguageContext = createContext()

const translations = {
  vn: {
    nav: {
      about: 'Giới thiệu',
      project: 'Dự án',
      tools: 'Công cụ',
      contact: 'Liên hệ'
    },
    about: {
      title: 'Giới thiệu',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Văn A',
      headline: 'Tôi tạo ra **thiết kế sản phẩm** và **trải nghiệm thương hiệu**',
      headlineHighlight1: 'thiết kế sản phẩm',
      headlineHighlight2: 'trải nghiệm thương hiệu',
      intro: 'Tôi là một developer đam mê với công nghệ và luôn tìm kiếm những cơ hội để học hỏi và phát triển. Với kinh nghiệm trong việc phát triển web và ứng dụng, tôi luôn cố gắng tạo ra những sản phẩm chất lượng và có giá trị.',
      getInTouch: 'Liên hệ',
      mySkills: 'Kỹ năng của tôi',
      myExpertise: 'Chuyên môn của tôi',
      expertise1: 'Chiến lược & Định hướng',
      expertise1Desc: 'Phát triển chiến lược và định hướng cho các dự án để đạt được mục tiêu kinh doanh.',
      expertise2: 'Branding & Logo',
      expertise2Desc: 'Tạo dựng thương hiệu và logo độc đáo, thể hiện đúng bản sắc của doanh nghiệp.',
      expertise3: 'UI & UX Design',
      expertise3Desc: 'Thiết kế giao diện và trải nghiệm người dùng tối ưu, thân thiện và hiệu quả.',
      expertise4: 'Web Development',
      expertise4Desc: 'Phát triển website và ứng dụng web hiện đại, responsive và hiệu suất cao.',
      aboutMeTitle: 'Về tôi',
      aboutMeDesc: 'Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm trong việc phát triển các ứng dụng web và mobile. Tôi đam mê tạo ra những sản phẩm công nghệ chất lượng cao, mang lại giá trị thực sự cho người dùng.',
      visitPortfolio: 'Xem Portfolio',
        skills: 'Kỹ năng',
        experience: 'Kinh nghiệm',
        workExperience: 'Kinh nghiệm làm việc',
        keyAchievements: 'Thành tựu chính',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
      fullStack: 'Full Stack Developer',
      current: 'Hiện tại',
      companyName: 'Công ty ABC',
      experienceDesc: 'Phát triển và duy trì các ứng dụng web full-stack, làm việc với nhiều công nghệ khác nhau để tạo ra các giải pháp hiệu quả.'
    },
    project: {
      title: 'Dự án',
      description: 'Các dự án tôi đã tham gia phát triển và đóng góp'
    },
    tools: {
      title: 'Công cụ',
      description: 'Các công cụ và phần mềm tôi sử dụng trong công việc hàng ngày'
    },
    contact: {
      title: 'Liên hệ',
      description: 'Hãy liên hệ với tôi nếu bạn có bất kỳ câu hỏi hoặc cơ hội hợp tác nào',
      email: 'Email',
      phone: 'Điện thoại',
      location: 'Địa điểm',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      sendMessage: 'Gửi tin nhắn',
      yourName: 'Tên của bạn',
      enterName: 'Nhập tên của bạn',
      enterEmail: 'your.email@example.com',
      subject: 'Chủ đề',
      enterSubject: 'Chủ đề tin nhắn',
      message: 'Tin nhắn',
      enterMessage: 'Nhập tin nhắn của bạn...',
      send: 'Gửi tin nhắn',
      viewMore: 'Xem thêm →'
    },
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Nền tảng thương mại điện tử với đầy đủ tính năng quản lý sản phẩm, đơn hàng và thanh toán.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#'
      },
      {
        title: 'Task Management App',
        description: 'Ứng dụng quản lý công việc với giao diện trực quan và dễ sử dụng, hỗ trợ làm việc nhóm.',
        tags: ['Vue.js', 'Firebase', 'PWA'],
        link: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Dashboard hiển thị thông tin thời tiết theo thời gian thực với biểu đồ và dự báo chi tiết.',
        tags: ['React', 'Chart.js', 'API'],
        link: '#'
      },
      {
        title: 'Social Media Analytics',
        description: 'Công cụ phân tích và báo cáo hiệu suất trên các nền tảng mạng xã hội.',
        tags: ['Python', 'Flask', 'D3.js', 'PostgreSQL'],
        link: '#'
      },
      {
        title: 'Mobile Banking App',
        description: 'Ứng dụng ngân hàng di động với tính năng chuyển tiền, thanh toán và quản lý tài khoản.',
        tags: ['React Native', 'Node.js', 'MySQL'],
        link: '#'
      },
      {
        title: 'Learning Management System',
        description: 'Hệ thống quản lý học tập trực tuyến với video, bài tập và đánh giá tự động.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
        link: '#'
      }
    ],
    toolsList: [
      {
        title: 'VS Code',
        description: 'Trình soạn thảo code phổ biến với nhiều extension hữu ích cho development.',
        tags: ['Editor', 'IDE'],
        link: 'https://code.visualstudio.com/'
      },
      {
        title: 'Git & GitHub',
        description: 'Hệ thống quản lý phiên bản và nền tảng lưu trữ code phổ biến nhất.',
        tags: ['Version Control', 'Collaboration'],
        link: 'https://github.com/'
      },
      {
        title: 'Docker',
        description: 'Công cụ containerization giúp đóng gói và triển khai ứng dụng dễ dàng.',
        tags: ['Container', 'DevOps'],
        link: 'https://www.docker.com/'
      },
      {
        title: 'Postman',
        description: 'API testing tool giúp kiểm thử và tài liệu hóa các API endpoints.',
        tags: ['API', 'Testing'],
        link: 'https://www.postman.com/'
      },
      {
        title: 'Figma',
        description: 'Công cụ thiết kế UI/UX chuyên nghiệp với khả năng collaboration mạnh mẽ.',
        tags: ['Design', 'UI/UX'],
        link: 'https://www.figma.com/'
      },
      {
        title: 'Notion',
        description: 'Công cụ quản lý dự án và ghi chú all-in-one cho team và cá nhân.',
        tags: ['Productivity', 'Documentation'],
        link: 'https://www.notion.so/'
      },
      {
        title: 'Slack',
        description: 'Nền tảng giao tiếp nhóm với tích hợp nhiều công cụ development.',
        tags: ['Communication', 'Team'],
        link: 'https://slack.com/'
      },
      {
        title: 'Jira',
        description: 'Công cụ quản lý dự án và theo dõi bug phổ biến trong Agile development.',
        tags: ['Project Management', 'Agile'],
        link: 'https://www.atlassian.com/software/jira'
      }
    ]
  },
  en: {
    nav: {
      about: 'About Me',
      project: 'Project',
      tools: 'Tools',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      greeting: 'Hey, I am',
      name: 'John Doe',
      headline: 'I create **product design** and **brand experience**',
      headlineHighlight1: 'product design',
      headlineHighlight2: 'brand experience',
      intro: 'I am a developer passionate about technology and always seeking opportunities to learn and grow. With experience in web and application development, I always strive to create quality and valuable products.',
      getInTouch: 'Get In Touch',
      mySkills: 'My Skills',
      myExpertise: 'My Expertise',
      aboutMeTitle: 'About Me',
      aboutMeDesc: 'I am a Full Stack Developer with over 5 years of experience in developing web and mobile applications. I am passionate about creating high-quality technology products that bring real value to users.',
      visitPortfolio: 'Visit My Portfolio',
        skills: 'Skills',
        experience: 'Experience',
        workExperience: 'Work Experience',
        keyAchievements: 'Key Achievements',
        frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
      fullStack: 'Full Stack Developer',
      current: 'Present',
      companyName: 'ABC Company',
      experienceDesc: 'Developing and maintaining full-stack web applications, working with various technologies to create efficient solutions.'
    },
    project: {
      title: 'Projects',
      description: 'Projects I have participated in developing and contributing to'
    },
    tools: {
      title: 'Tools',
      description: 'Tools and software I use in my daily work'
    },
    contact: {
      title: 'Contact',
      description: 'Feel free to contact me if you have any questions or collaboration opportunities',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      sendMessage: 'Send Message',
      yourName: 'Your Name',
      enterName: 'Enter your name',
      enterEmail: 'your.email@example.com',
      subject: 'Subject',
      enterSubject: 'Message subject',
      message: 'Message',
      enterMessage: 'Enter your message...',
      send: 'Send Message',
      viewMore: 'View More →'
    },
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'E-commerce platform with full features for product management, orders, and payments.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#'
      },
      {
        title: 'Task Management App',
        description: 'Task management application with intuitive interface and easy to use, supporting team collaboration.',
        tags: ['Vue.js', 'Firebase', 'PWA'],
        link: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Dashboard displaying real-time weather information with charts and detailed forecasts.',
        tags: ['React', 'Chart.js', 'API'],
        link: '#'
      },
      {
        title: 'Social Media Analytics',
        description: 'Analytics and reporting tool for performance on social media platforms.',
        tags: ['Python', 'Flask', 'D3.js', 'PostgreSQL'],
        link: '#'
      },
      {
        title: 'Mobile Banking App',
        description: 'Mobile banking application with money transfer, payment, and account management features.',
        tags: ['React Native', 'Node.js', 'MySQL'],
        link: '#'
      },
      {
        title: 'Learning Management System',
        description: 'Online learning management system with videos, assignments, and automated assessments.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
        link: '#'
      }
    ],
    toolsList: [
      {
        title: 'VS Code',
        description: 'Popular code editor with many useful extensions for development.',
        tags: ['Editor', 'IDE'],
        link: 'https://code.visualstudio.com/'
      },
      {
        title: 'Git & GitHub',
        description: 'Most popular version control system and code hosting platform.',
        tags: ['Version Control', 'Collaboration'],
        link: 'https://github.com/'
      },
      {
        title: 'Docker',
        description: 'Containerization tool that helps package and deploy applications easily.',
        tags: ['Container', 'DevOps'],
        link: 'https://www.docker.com/'
      },
      {
        title: 'Postman',
        description: 'API testing tool that helps test and document API endpoints.',
        tags: ['API', 'Testing'],
        link: 'https://www.postman.com/'
      },
      {
        title: 'Figma',
        description: 'Professional UI/UX design tool with strong collaboration capabilities.',
        tags: ['Design', 'UI/UX'],
        link: 'https://www.figma.com/'
      },
      {
        title: 'Notion',
        description: 'All-in-one project management and note-taking tool for teams and individuals.',
        tags: ['Productivity', 'Documentation'],
        link: 'https://www.notion.so/'
      },
      {
        title: 'Slack',
        description: 'Team communication platform with integration of many development tools.',
        tags: ['Communication', 'Team'],
        link: 'https://slack.com/'
      },
      {
        title: 'Jira',
        description: 'Popular project management and bug tracking tool in Agile development.',
        tags: ['Project Management', 'Agile'],
        link: 'https://www.atlassian.com/software/jira'
      }
    ]
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'vn'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === 'vn' ? 'en' : 'vn')
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

