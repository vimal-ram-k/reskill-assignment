import {  render , screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { NavigationBar } from "../../UI/navigationbar";
import { describe , test ,expect, vi, beforeAll } from "vitest";
import {  MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "../../redux/store";


describe("Navigationbar", () => {


    const onCallbackMockFn = vi.fn();
    
   const setup = ((url = "/") =>{
        render(
            <MemoryRouter initialEntries={[url]}>
              <Provider store={Store}>
                <NavigationBar onCallback={onCallbackMockFn} />
              </Provider>
            </MemoryRouter>
          );
        
    })


    test("Navigationbar visible", () => {
        setup()
      const navigationBar = screen.getByTestId("test-navbar"); // Correct method
      expect(navigationBar).toBeInTheDocument();
    });

    beforeAll(() =>{
        onCallbackMockFn.mockClear()
    })

    test("Searchbar input pass test", async () => {
        setup()
        // Wait for the search bar to appear
        const searchbar = await screen.findByTestId("test-searchbar");
        await userEvent.type(searchbar , "React")
        expect(onCallbackMockFn).toBeCalledWith("React");
        expect(searchbar).toHaveValue("React");
      });


      test("Searchbar hidden when user moved to other pages" , async() =>{
        setup("/order")
        await waitFor(() => {
            const searchbar = screen.queryByTestId("test-searchbar");
            expect(searchbar).not.toBeInTheDocument();
          });
      })
  });



