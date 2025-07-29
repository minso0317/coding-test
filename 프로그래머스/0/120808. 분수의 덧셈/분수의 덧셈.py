def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def solution(numer1, denom1, numer2, denom2):
    numer = numer1 * denom2 + numer2 * denom1
    denom = denom1 * denom2
    
    def simplify(numer, denom):
        common = gcd(numer, denom)
        return [numer // common, denom // common]
    
    return simplify(numer, denom)

