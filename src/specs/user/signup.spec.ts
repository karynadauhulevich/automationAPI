import * as supertest from 'supertest';
const request = supertest('localhost:8001/api/v1')




describe('SIGNUP', () => {
    it('Should be able to register user', async () => {
       const res =await  request.post("/users/signup")
           .send({
               "name": "Karna",
               "email": "srfju@gmail.com",
               "password": "string123",
               "passwordConfirm": "string123"
           }).expect(201)
        expect(res.body.data.user.name).toEqual("Karna")
        expect(res.body.data.user.email).toEqual("srfju@gmail.com")
        //expect(res.body.data.status).toBe("success")

        console.log(res.body, 'res')



    })
    
});