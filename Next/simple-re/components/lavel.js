export default function Lavel({hf,post}) {
    return (
        <div>
        
                <lavel
                  htmlFor = {hf}>
                  {post}
                </lavel>
        <style jsx>{`
        div{
            display : flex;
            align-items : center;
            justify-content : left;
        }
        lavel{
            font-size : 13px;
        }
        `}
        </style>
        
        </div>
    )
}