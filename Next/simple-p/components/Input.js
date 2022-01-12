export default function Inputs({id,placeholder,type}) {
    return (
        <div>
        <input 
        className="tag" 
        id={id}
        placeholder={placeholder} 
        type={type}
        />
        <style jsx>{`
         div{
            display : flex;
            align-items : center;
            justify-content : center;
         }
         .tag{
            position : relative;
            
            width : 100%;
            height : 40px;
            
        }
        `}
        </style>
        </div>
    )
}