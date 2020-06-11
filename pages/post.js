import Layout from "../components/Layout";
import {withRouter} from 'next/router';

const Post = ({ router }) =>  (
    <Layout title={router.query.title}>
        <p>
            Ipsum labore proident ad anim non. Id labore Lorem mollit occaecat labore enim sunt cupidatat occaecat exercitation proident. Cillum duis sint commodo non in sint et nulla velit dolor veniam.

Exercitation dolore qui ipsum Lorem voluptate ex esse elit proident laboris adipisicing eu enim veniam. Excepteur laborum laboris sint in incididunt tempor. Officia nostrud nulla eiusmod ipsum exercitation officia quis cupidatat deserunt sint velit cillum id sint. Aliquip quis ut voluptate sit officia pariatur nisi ullamco occaecat.

Sunt duis cillum ea esse ipsum aliqua officia proident id sit. Quis ea adipisicing qui nostrud ipsum nisi eiusmod quis adipisicing commodo. Culpa in ad irure duis qui velit esse ipsum quis sunt. Voluptate fugiat quis tempor ea laboris duis ea dolore.

Magna nulla est ea do consectetur cillum tempor enim ea qui et voluptate. Exercitation irure veniam sunt Lorem eiusmod irure. Qui occaecat veniam ut enim sunt nulla qui officia nisi ipsum quis esse aliqua laborum. Duis laboris excepteur ea fugiat eiusmod voluptate incididunt. Proident officia et consectetur ipsum velit ut incididunt. Proident proident nulla magna aliquip minim anim non proident labore tempor commodo cillum.

Consectetur nisi magna sint ipsum proident consectetur amet. Officia et veniam exercitation deserunt anim. Est laboris eu anim ut consectetur eu Lorem ipsum incididunt minim eu. Ipsum consequat reprehenderit cupidatat cupidatat. Excepteur deserunt reprehenderit sit minim do. Tempor ex consectetur qui in Lorem ut ullamco est. Minim sunt reprehenderit adipisicing veniam.
        </p>

    </Layout>
)

export default withRouter(Post);