import { test, expect } from "@playwright/test";


test('API POST DEMO', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: 
    })

    expect(response.status()).toBe(201);

    const responsebody = await response.json();


    expect(responsebody.name).toBe("morpheus");
    expect(responsebody.job).toBe("leader");

    console.log(responsebody);


})



