
function Fibonacci()
{
    let x =0;
    let y =1;
    let z = x+y;
    console.log(x)

    while(z<100)
    {
        console.log(z)
        z=x+y;
        x = y
        y = z
    }
}
Fibonacci()