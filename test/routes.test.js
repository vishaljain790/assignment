const supertest = require('supertest')
const app = require('../app')

const request = supertest(app);

/**
 * This is a proper call made to the api...
 */
describe('Post Endpoints: /v1/get-data', () => {

  jest.setTimeout(30000);

  /**
   * Can be used if something is required before running the test casess.
   * like db connectivity,
   * run some user data etc.
   */
  // beforeAll(async() => {

  // })

   /**
   * can be run after all test cases run, 
   * good to clean something like db connection,
   * clean the memory
   * delete the file
   * compose somehting etc...
   */
  // afterAll(async() => {

  // })

  it('should be a successful call', async () => {
    const res = await request
    .post('/v1/get-data')
    .send({
      "startDate": "2010-06-24",
      "endDate" : "2020-06-24",
      "minCount" : "10",
      "maxCount": "100"
  })
  .expect(200)
  .then((response) => {
    expect(response.body.code).toBe(0);
    expect(response.body.msg).toBe("Success");
  })
  });


  /**
   * If any field missed then expected status code is 422,
   * code = -1,
   * and msg = "Failure"
   */
  it('should not be a successful call', async () => {
    const res = await request
    .post('/v1/get-data')
    .send({
      "startDate": "",
      "endDate" : "2020-06-24",
      "minCount" : "10",
      "maxCount": ""
  })
  .expect(422)
  .then((response) => {
    expect(response.body.code).toBe(-1);
    expect(response.body.msg).toBe("Failure");
  })
  });


  /**
   * MaxCount val always should be greater then the minCount
   */
  it('maxCount should be greater than minCount', async () => {
    const res = await request
    .post('/v1/get-data')
    .send({
      "startDate": "2010-06-24",
      "endDate" : "2020-06-24",
      "minCount" : "10",
      "maxCount": "2"
  })
  .expect(422)
  .then((response) => {
    expect(response.body.code).toBe(-1);
    expect(response.body.msg).toBe("Failure");
  })
  });


    /**
   * EndDate val always should be greater than the StartDate
   */
     it('EndDate should be greater than StartDate', async () => {
      const res = await request
      .post('/v1/get-data')
      .send({
        "startDate": "2020-06-24",
        "endDate" : "2010-06-24",
        "minCount" : "10",
        "maxCount": "20"
    })
    .expect(422)
    .then((response) => {
      expect(response.body.code).toBe(-1);
      expect(response.body.msg).toBe("Failure");
    })
    });


    /**
   * Field Should not missing
   */
     it('maxCount should be greater than minCount', async () => {
      const res = await request
      .post('/v1/get-data')
      .send({
        "startDate": "",
        "endDate" : "",
        "minCount" : "",
        "maxCount": ""
    })
    .expect(422)
    .then((response) => {
      expect(response.body.code).toBe(-1);
      expect(response.body.msg).toBe("Failure");
    })
    });
})