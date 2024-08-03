package utility

import (
	"os"
)

func GetRootPath() string {
	home, err3 := os.UserHomeDir()
	if err3 != nil {
		panic(err3)
	}
	return home
}
