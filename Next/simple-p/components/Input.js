export default function Inputs({id,placeholder,type,onChange}) {
    return (
        <div>
        <input 
        className="tag" 
        id={id}
        placeholder={placeholder} 
        type={type}
        onChange={onChange}
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
            border : 3px solid rgba(169, 210, 200, 0.6);
            border-radius : 3px;
        }
        .tag:hover{
            border : 3px solid rgba(169, 210, 200, 0.9);
        }
        `}
        </style>
        </div>
    )
}