import { Course, Subject, Teacher } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: '高阶微积分冲刺班',
    subject: Subject.MATH,
    gradeLevel: '高中三年级',
    description: '针对高考及竞赛的高强度微积分训练，深入浅出讲解核心定理。',
    longDescription: '本课程专为准备高考压轴题及数学竞赛的高三学生设计。通过系统的微积分理论讲解与高强度习题训练，帮助学生彻底掌握导数、积分及其应用。课程内容涵盖极限理论、微分中值定理、定积分的应用等核心模块，重点突破解题思维瓶颈，培养严谨的逻辑推理能力。',
    syllabus: [
      '第一周：极限与连续性的深度辨析',
      '第二周：导数的几何意义与物理应用',
      '第三周：微分中值定理（罗尔、拉格朗日、柯西）',
      '第四周：不定积分的计算技巧',
      '第五周：定积分在几何与物理中的应用',
      '第六周：微积分综合难题攻关'
    ],
    price: '¥3999/期',
    image: 'https://picsum.photos/id/20/800/600',
    features: ['名师授课', '真题解析', '1对1答疑', '配套讲义', '录播回放']
  },
  {
    id: 'c2',
    title: '量子物理启蒙与进阶',
    subject: Subject.PHYSICS,
    gradeLevel: '高中一/二年级',
    description: '从经典力学到量子力学的跨越，培养物理思维与建模能力。',
    longDescription: '物理学不仅仅是公式的堆砌，更是理解宇宙运行规律的钥匙。本课程旨在引导高中生跨越经典物理的边界，初步探索量子世界的奥秘。通过生动的实验演示和双语教学，我们将探讨波粒二象性、测不准原理、薛定谔方程等激动人心的概念，为未来从事理工科研究打下坚实基础。',
    syllabus: [
      '第一周：经典物理的乌云与量子革命',
      '第二周：光的波粒二象性',
      '第三周：玻尔模型与原子光谱',
      '第四周：海森堡测不准原理',
      '第五周：初识薛定谔方程',
      '第六周：量子力学在现代科技中的应用'
    ],
    price: '¥3599/期',
    image: 'https://picsum.photos/id/48/800/600',
    features: ['实验演示', '双语教学', '思维导图', '前沿科普', '名校推荐信机会']
  },
  {
    id: 'c3',
    title: 'Python 人工智能基础',
    subject: Subject.CODING,
    gradeLevel: '初中/高中',
    description: '零基础入门Python，结合AI库进行实战项目开发。',
    longDescription: '在人工智能时代，编程已成为必备技能。本课程从零开始教授 Python 语言，并迅速切入 AI 领域。学生将学习使用 NumPy、Pandas 进行数据分析，利用 Scikit-learn 和 TensorFlow 搭建简单的机器学习模型。课程采用项目驱动式教学，最终每位学员都将完成一个属于自己的 AI 作品。',
    syllabus: [
      '第一周：Python 语法基础与环境搭建',
      '第二周：数据结构与算法入门',
      '第三周：科学计算库 NumPy & Pandas',
      '第四周：数据可视化 Matplotlib',
      '第五周：机器学习基础与 Scikit-learn',
      '第六周：期末项目实战：手写数字识别'
    ],
    price: '¥4299/期',
    image: 'https://picsum.photos/id/60/800/600',
    features: ['项目驱动', '作品集指导', '在线环境', '代码Code Review', '竞赛辅导']
  },
  {
    id: 'c4',
    title: '雅思口语突击营',
    subject: Subject.ENGLISH,
    gradeLevel: '高中全学段',
    description: '针对雅思口语考试的专项训练，外教模拟面试。',
    longDescription: '专为短期内需要提升雅思口语分数的学生打造。课程由资深前雅思考官领衔，针对口语考试的评分标准（流利度、词汇、语法、发音）进行针对性训练。通过大量的全真模拟面试和实时反馈，帮助学生克服紧张情绪，掌握高分答题策略，积累地道的表达素材。',
    syllabus: [
      '第一周：评分标准解析与Part 1高频话题',
      '第二周：Part 2 叙事逻辑与素材积累',
      '第三周：Part 3 抽象话题的深度讨论',
      '第四周：语音语调专项矫正',
      '第五周：复杂句式与地道习语应用',
      '第六周：全真模拟面试与个性化诊断'
    ],
    price: '¥2899/期',
    image: 'https://picsum.photos/id/364/800/600',
    features: ['全真模拟', '发音纠正', '高频题库', '外教1v1', '考前心理辅导']
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: '林渊',
    title: '金牌数学讲师',
    subject: Subject.MATH,
    education: '北京大学 数学科学学院 博士',
    bio: '拥有10年奥数竞赛辅导经验，善于引导学生发现数学之美，所带学生多人获得国家级奖项。',
    image: 'https://picsum.photos/id/1005/400/400'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    title: '资深外教',
    subject: Subject.ENGLISH,
    education: '剑桥大学 语言学 硕士',
    bio: '拥有TESOL高级证书，专注于亚洲学生口语与写作能力的提升，教学风格幽默风趣。',
    image: 'https://picsum.photos/id/338/400/400'
  },
  {
    id: 't3',
    name: '张衡',
    title: '物理学科带头人',
    subject: Subject.PHYSICS,
    education: '清华大学 物理系 硕士',
    bio: '曾任知名科技公司研发工程师，将前沿科技融入物理教学，让抽象概念具体化。',
    image: 'https://picsum.photos/id/1012/400/400'
  }
];