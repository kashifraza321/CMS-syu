import * as studyAbroad from '../../assets/blogData/studyAbroad'
import * as exam from '../../assets/blogData/exam'
import * as howtoGuide from '../../assets/blogData/howtoGuide'
import * as career from '../../assets/blogData/career'
import * as topCollegesUniversities from '../../assets/blogData/topCollegesUniversities'
import * as neetCounselling from '../../assets/blogData/neetCounselling'

const studyAbroads = studyAbroad.default
const exams = exam.default
const howtoGuides = howtoGuide.default
const careers = career.default
const topCollegesUniversitiess = topCollegesUniversities.default
const neetCounsellings =neetCounselling.default
const blogCategories =[
    'Study Abroads', 
    'Exams', 
    'How To Guides',
    'Careers',
    'Top Colleges Universitiess',
    'NEET Counselling'
]
console.log('studyAbroad: ', studyAbroad);
const blogdata = [
    studyAbroads, 
    exams, 
    howtoGuides,
    careers,
    topCollegesUniversitiess,
    neetCounsellings
]
export { 
    blogdata, blogCategories
 }
