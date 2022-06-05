import Button from '@mui/material/Button'
const AllCourses = ({retriveCourses}:any) => {
    return (
        <Button variant="contained" color="success" onClick={retriveCourses}>Click to get All Courses</Button>)
}
export default AllCourses;