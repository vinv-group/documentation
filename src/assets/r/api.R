# Installing the packages
#install.packages("httr")
#install.packages("jsonlite")

# Loading packages
library(httr)
library(jsonlite)

# Declare your credentials ( Sys.setenv(FoC_username = "YourUsername", FoC_password = "YourPassword") )
.username <- Sys.getenv("FoC_username")
.password <- Sys.getenv("FoC_password")

# Initializing API Call and Authentication
res <- GET(
  url = "http://localhost:3001/data/userdb-6765727269742e62616c696e647440677275656e6563686f2e6465/vinv-individual-tree",
  authenticate(.username, .password) 
)


response <- fromJSON(rawToChar(res$content))

if(response$ok == FALSE){
  stop(response$message)
}

print(response$data)
