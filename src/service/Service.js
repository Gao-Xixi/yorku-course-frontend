import http from '../http-common'
class CourseDataService{
    getAllCourses(){
        return http.get("/courses")
    }
    getCourseBySubjectAndNumber(subject, number){
        let url = `course/subject/number/${subject}/${number}`
        // let url = string.replace("%E2%80%8B", "")
        return http.get(url)
    }
    getCourseBySubject(subject){
        return http.get(`courses/subject/${subject}`)
    }
    getCourseByCredit(credit){
        return http.get(`courses/credit/${credit}`)
    }
    getCourseByTitle(title){
        return http.get(`courses/title/${title}`)
    }
    getCourseBySubjectAndCredit(subject, credit){
        return http.get(`courses/subject/credit/${subject}/${credit}`)
    }
    getCourseBySubjectAndFirstNumber(subject, firstnumber){
        return http.get(`courses/subject/firstnumber/${subject}/${firstnumber}`)
    }
    getCourseBySubjectAndTitle(subject, title){
        return http.get(`courses/subject/title/${subject}/${title}`)
    }
    getCourseBySubjectAndFirstNumberAndTitle(subject, firstnumber, title){
        return http.get(`courses/subject/firstnumber/title/${subject}/${firstnumber}/${title}`)
    }

}
export default new CourseDataService();