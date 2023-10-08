#!/usr/bin/env bash

PASSWD=pa55wOrd!

dotnet dev-certs https -ep ./serviceC.pfx -p $PASSWD
cd .. && dotnet user-secrets set "Kestrel:Certificates:Development:Password" $PASSWD 




 