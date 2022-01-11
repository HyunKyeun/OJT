import {useRouter} from "next/router";
import Seo from "../../components/Seo";


// params값을 title, id에 넣기
export default function Detail({params}){
    console.log({params});
    const router = useRouter();
    const [title, id] = params || [];
    console.log(router);
    return (
    <div>
        <Seo title = {title}/>
        <h4>{title}</h4>
        <h4>{id}</h4>
        
    </div>
    );

}
// params 값에 입력했던 값 id, title값 넣고, props에 params 넣기
export function getServerSideProps({params:{params}}) {
        return{ props: {
            params,
        },
    };
}