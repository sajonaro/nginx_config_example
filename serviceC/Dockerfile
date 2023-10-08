# .NET Core SDK
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /App
COPY . ./

# .NET Core Restore
RUN dotnet restore ./serviceC.csproj

# .NET Core Build and Publish
RUN dotnet publish ./serviceC.csproj -c Release -o /publish

# ASP.NET Core Runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /App
COPY --from=build /publish ./


ENTRYPOINT ["dotnet", "serviceC.dll"]