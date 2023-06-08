const db = require('./db')
const Mutation = {
    createStudent:(root,args,context,info) => {
       return db.students.create({collegeId:args.collegeId,
       firstName:args.firstName,
       lastName:args.lastName})
    },
       addStudent_returns_object:(root,args,context,info) => {
      const id = db.students.create({
         collegeId:args.collegeId,
         firstName:args.firstName,
         lastName:args.lastName
      })

      return db.students.get(id)
   }
 }
const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students: () => db.students.list(),
    colleges: () => db.colleges.list(),
    studentById:(root,args,context,info) => {
        return db.students.get(args.id);
     },
     SetFavColor:(root,args) => {
        return  "Your Fav Color is "+args.color;
     }
 
 }


 const Student = {
    fullName:(root,args,context,info) => {
       return root.firstName+" "+root.lastName
    },
    college:(root) => {
        return db.colleges.get(root.collegeId);
     }
    }
 module.exports = {Query, Student, Mutation}