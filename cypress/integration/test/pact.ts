const response = {
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "dib dab dob"
};

describe("Testing pact", () => {
  it("adds an interaction", () => {
    cy.addInteraction({
      provider: "reqres",
      state: "ok",
      uponReceiving: "a request to retrieve users",
      withRequest: {
        method: "GET",
        path: "/comments/1"
      },
      willRespondWith: {
        status: 200,
        body: {
          response
        }
      }
    });

    cy.server({});
    cy.route(() => {
      return {
        method: "GET",
        url: "/comments/1",
        response
      };
    }).as("comment");

    cy.request("http://localhost:5006/comments/1");

    cy.visit("https://example.cypress.io/commands/network-requests");

    cy.findAllByText("Get Comment").click();
    cy.wait("@comment");
  });
});
