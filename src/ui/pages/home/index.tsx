import { HandleTask, HandleTheme, ListTask } from "@components/home"
import { HomeWrapper, HomeListWrapper } from "@style/home-styled"

export const HomePage = () => {
    return (
        <HomeWrapper>
            <HandleTheme />
            <HomeListWrapper>
                <h1> To Do </h1>
                <ListTask />
            </HomeListWrapper>
            <HandleTask />
        </HomeWrapper>
    )
}
