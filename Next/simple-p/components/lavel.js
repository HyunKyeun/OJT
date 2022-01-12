export default function Lavel({htmlfor,post}) {
    return (
        <div>
        
                <lavel
                  htmlfor = {htmlfor}>
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