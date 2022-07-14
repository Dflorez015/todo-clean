import { HomeListWrapper, HomeWrapper } from '+/utils/style/home-styled'
import { HandleTask } from '+/components/home/HandleTask'
import ListTask from '+/components/home/ListTask'

export const HomePage = () => {
    return (
        <HomeWrapper>
            <HomeListWrapper>
                <h1> To Do </h1>
                <ListTask />
            </HomeListWrapper>
            <HandleTask />
        </HomeWrapper>
    )
}
